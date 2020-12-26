/**   About program:
This is a program for curious young people, nature lovers and Greenpeace people!
! By running the creatures.js file, you start the menagerie's life model!
The menagerie includes 4 types of creatures:
1-Wooden, 2-Steel, 3-Spiritual, 4-Water.
Water (type 4) creatures are in 3 states (subtypes):
Ice, Water, Steam, which change chaotically every cycle.
We enter, respectively, the initial number of creatures of each type, subtype (for Water) and females.
The male is automatically determined from the difference between the general and the female.
Each creature has a male or female name at birth, respectively.
The default lifespan (Longevity) of each is 10 years (cycles or generations).
At birth, the creature is 0 years old.
Creatures can ":-D" - laugh, ":-(" - cry, ": -o" - chat.
These states can change when they meet. Paired meetings take place one per cycle
for each creature (the last odd one can be left without a pair)
When they meet, the creatures greet each other, calling each other by name.
If Wood (1), Steel (2), Spirit (3) and Water (4) are encountered in any state:
1) Wood (1) and Water (4), Water longevity increases (+1)
   The Longevity of the Tree in this case does not change for the balance of power.
2) Wood (1) and Steel (2), Wood longevity decreases (-1)
3) Steel (2) and Water (2), Steel longevity decreases (-1)
4) Spirit (3) and Wood (1), Spirit's longevity increases (+1)
5) Spirit (3) and Water (4), the longevity of Water decreases (-1)
Each cycle the age of creatures grows by one (+1)
After such a cycle, in which the age of the creature reached
life expectancy values ​​(longevity), the creature "dies" (erased).
When a Tree dies (1), with a 50% chance a new tree is born from the dying one.
When meeting of the same type of heterosexual individuals who have reached 3 years of age (adulthood)
they have a "child". In the same situation, but the type of one is Spirit, the other
Water Vapor - is born with a 50/50 probability of Spirit or Water (in any condition).
*/

/**  ! 1. initial Data                 
  count of  1.cycleTimeMinutes (if "0" -> without delay) 2.lifeTimeMenagerieMinutes)  3.lifespanCreature
  CreaturesType: Woods, WoodFem, Steels, SteelFem, Spirits, SpiritFem
  typeWaterCreature:   WaterIce   WaterIceFem   Water   WaterIceFem  WaterSream   15.WaterSream */

var InstalCreaturesData = {
  cycleTimeMinutes: 0.1,
  lifeTimeMenagerieMinutes: 1,
  lifespanCreature: 10,
  Woods: 12,
  WoodFem: 6,
  Steels: 12,
  SteelFem: 6,
  Spirits: 12,
  SpiritFem: 6,
  WaterIce: 4,
  WaterIceFem: 2,
  WaterLiquid: 4,
  WaterLiquidFem: 2,
  WaterSream: 4,
  WaterSreamFem: 2,
};
{
  /** { Log parts switches. Put something in quotation marks to include the corresponding log.
   0. write Generation   1. write statistic for year
   2. statistic every 5-th generation & statistic when zeroing amount of any type
   3. display the parameters of the new creature
   4. dialogs   5. type who born   6.  detale who was born   7. type who died & age
              0 , 1,  2, 3 , 4 , 5 , 6 , 7 
  */
}
LogSwitch = {
  Generation: 1,
  statisticForYear: 1,
  StatEvery5genOrZeroing: 0,
  ParametersNewCreature: 1,
  Dialogs: 1,
  typeWhoBorn: 1,
  detaleWhoBorn: 1,
  typeWhoDiedAge: 1,
};
let sum =
  InstalCreaturesData.Woods +
  InstalCreaturesData.Steels +
  InstalCreaturesData.Spirits +
  InstalCreaturesData.WaterIce +
  InstalCreaturesData.Water +
  InstalCreaturesData.WaterSream;

// ! 2.  BEGIN of the Program

  
 // let section = document.querySelector('section');
//  section.innerHTML += ``;


  // var InstalCreaturesData = []; // todo>   We declare global counters and data arrays :
  var allCreatures = []; // array for menagerie creatures
  var labelZeroingType = { wood: 1, steel: 1, spirit: 1, water: 1 }; // array-label for nullified tipes
  var generation = 0; // for 1-st generation
  var id = 0; // counter of creatur
  // initialData(); // todo>   initial Data --> Look 0.initialData()
 // timerOfWarld(); // todo>   turn on the timer of cycles (years or generations) --> Look 3.timerOfWarld()


// ! 3. timerOfWarld()
function timerOfWarld() {
  Log("Big Bang !!!");
  // todo>   the time of civilization flows here, the cycle time and the life time of the menagerie are set until the End of the World
  let extinction = " !!! There was an extinction of civilization !";

  //  turn on the cycle timer
  let timer = setInterval(() => {
    newYear();
    if (allCreatures.length <= 0) {
      Log(extinction);
      clearInterval(timer);
      process.exit(0);
    }
  }, InstalCreaturesData.cycleTimeMinutes * 60 * 1000); // repeat newYear after "cycleTime" minutes

  setTimeout(() => {
    clearInterval(timer); // and set the End of the World
    Log("End of the Warld !");
  }, InstalCreaturesData.lifeTimeMenagerieMinutes * 60 * 1000); // lifeTimeMenagerie (minutes) - when to stop output
}

// ! 3.1 пишем лог
function Log(txt){
console.log(txt);
 document.writeln(txt+"<br>");
}

// ! 4. newYear()
function newYear() {
  if (generation == 0) {
    InstallCreatures(); // todo>   if it's first Year --> Look InstallCreatures()
  } else {
    Life(); // todo>        if it's not the first time --> Look 8.Life()
  }
  if (LogSwitch.statisticForYear != 0) statistic();
  //elseif (LogSwitch.Generation != 0) Log("Generation " + generation);
  // Show current number Generation (cycle,year) , statistics / if LogSwitch!=0
  generation++;
}

// ! 5. statistic()   -> show statistics of the past year
function statistic() {
  let statistic = {
    female: 0,
    male: 0,
    wood: 0,
    woodFem: 0,
    woodMale: 0,
    steel: 0,
    steelFem: 0,
    steelMale: 0,
    spirit: 0,
    spiritFem: 0,
    spiritMale: 0,
    water: 0,
    waterFem: 0,
    waterMale: 0,
    waterIce: 0,
    waterIceFem: 0,
    waterIceMale: 0,
    waterLiquid: 0,
    waterLiquidFem: 0,
    waterLiquidMale: 0,
    waterSream: 0,
    waterSreamFem: 0,
    waterSreamMale: 0,
  };
  {
    allCreatures.forEach((allCreat) => {
      // go through all the creatures of the main array of creatures
      if (allCreat.gender == "female") {
        statistic.female++; // counter female
      } else {
        statistic.male++; // counter male
      }
      switch (allCreat.CreaturesType) {
        case "wood":
          {
            statistic.wood++; // counter type of Wood (& female, & male)
            if (allCreat.gender == "female") {
              statistic.woodFem++;
            } else {
              statistic.woodMale++;
            }
          }
          break;
        case "steel":
          {
            statistic.steel++; // counter type of Steel (& female, & male)
            if (allCreat.gender == "female") {
              statistic.steelFem++;
            } else {
              statistic.steelMale++;
            }
          }
          break;
        case "spirit":
          {
            statistic.spirit++; // counter type of spirit (& female, & male)
            if (allCreat.gender == "female") {
              statistic.spiritFem++;
            } else {
              statistic.spiritMale++;
            }
          }
          break;
        case "water":
          {
            statistic.water++; // counter type of Water  (& female, & male)
            if (allCreat.gender == "female") {
              statistic.waterFem++;
            } else {
              statistic.waterMale++;
            }
            switch (allCreat.subType) {
              case "ice":
                {
                  statistic.waterIce++; // counter subType of waterIce (& female, & male)
                  if (allCreat.gender == "female") {
                    statistic.waterIceFem++;
                  } else {
                    statistic.waterIceMale++;
                  }
                }
                break;
              case "liquid":
                {
                  statistic.waterLiquid++; // counter subType of liquid (& female, & male)
                  if (allCreat.gender == "female") {
                    statistic.waterLiquidFem++;
                  } else {
                    statistic.waterLiquidMale++;
                  }
                }
                break;
              case "sream":
                {
                  statistic.waterSream++; // counter subType of waterSream (& female, & male)
                  if (allCreat.gender == "female") {
                    statistic.waterSreamFem++;
                  } else {
                    statistic.waterSreamMale++;
                  }
                }
                break;
            }
          }
          break;
      }
    });
    let doStat = 0; // Label for nullified array of statistic =0
    if (labelZeroingType.wood == 1 && statistic.wood == 0) {
      // track the moment of zeroing the number of some kind of creatures for an extraordinary output of statistical data
      labelZeroingType.wood = 0; // for Wood-type Label for nullified
      doStat = 1; // label for ivent
    }
    if (labelZeroingType.steel == 1 && statistic.steel == 0) {
      labelZeroingType.steel = 0; // for Steel-type Label for nullified
      doStat = 1;
    }
    if (labelZeroingType.spirit == 1 && statistic.spirit == 0) {
      // for Spitit-type Label for nullified
      labelZeroingType.spirit = 0;
      doStat = 1;
    }
    if (labelZeroingType.water == 1 && statistic.water == 0) {
      // for Water-type Label for nullified
      labelZeroingType.water = 0;
      doStat = 1;
    }

    if (LogSwitch.StatEvery5genOrZeroing != 0) {
      // --> Write statistic every 5-th generation & statistic when zeroing amount of any type of creatures
      if (generation % 5 == 0 || doStat == 1) logstat(statistic);
    } else {
      // otherwise --> Write all statistics every time.
      logstat(statistic);
    }
    // todo>    Result print to console --> Look 6.logstat(s)
  }
}

// ! 6. logstat(statistic)  - statistics log by type
function logstat(statistic) {
  Log("Generation " + generation);
  Log(`All-${allCreatures.length} f-${statistic.female}/m-${statistic.male}
Wood-${statistic.wood} f-${statistic.woodFem}/m-${statistic.woodMale}
Steel-${statistic.steel} f-${statistic.steelFem}/m-${statistic.steelMale}
Spirit-${statistic.spirit} f-${statistic.spiritFem}/m-${statistic.spiritMale}
Water-${statistic.water} f-${statistic.waterFem}/m-${statistic.waterMale}
Ice water-${statistic.waterIce} f-${statistic.waterIceFem}/m-${statistic.waterIceMale}
Liquid water-${statistic.waterLiquid} f-${statistic.waterLiquidFem}/m-${statistic.waterLiquidMale}
WaterSream-${statistic.waterSream} f-${statistic.waterSreamFem}/m-${statistic.waterSreamMale}
`);
}

//! 7.  InstallCreatures()  - creating an initial set
function InstallCreatures() {
  BornType(
    InstalCreaturesData.Woods,
    InstalCreaturesData.WoodFem,
    "wood",
    "wood"
  );
  BornType(
    InstalCreaturesData.Steels,
    InstalCreaturesData.SteelFem,
    "steel",
    "steel"
  );
  BornType(
    InstalCreaturesData.Spirits,
    InstalCreaturesData.SpiritFem,
    "spirit",
    "spirit"
  );
  BornType(
    InstalCreaturesData.WaterIce,
    InstalCreaturesData.WaterIceFem,
    "water",
    "ice"
  );
  BornType(
    InstalCreaturesData.WaterLiquid,
    InstalCreaturesData.WaterLiquidFem,
    "water",
    "liquid"
  );
  BornType(
    InstalCreaturesData.WaterSream,
    InstalCreaturesData.WaterSreamFem,
    "water",
    "sream"
  );
}

//! 7.1 creation of the required number of types and subtypes of creatures in the zero cycle
function BornType(countAll, countFem, CreaturesType, subType) {
  //  Сreating a group of creatures of this type
  // countFem- number of females of this type
  //setting all initial parameters for each created creature
  for (CreatureOfType = 1; CreatureOfType <= countAll; CreatureOfType++) {
    if (allCreatures.length <= 5000000) { 
      let gender = CreatureOfType <= countFem ? "female" : "male", // for the new creatures
        age = 1, //                                          identified distinctive properties
        parent = "God";
      allCreatures.push(
        new CreatureConstructor(
          gender,
          age,
          parent,
          parent,
          CreaturesType,
          subType
        )
      ); // added the Creature object to the array
      if (LogSwitch.ParametersNewCreature != 0)
        descriptionCreature(allCreatures[allCreatures.length - 1]); // display the parameters of the new creature / if LogSwitch !=""
    }
  }
  // id--; // removed the last redundant
}
//! 7.2 Creature object constructor
function CreatureConstructor(
  gender,
  age,
  parent1,
  parent2,
  CreaturesType,
  subType
) {
  (this.generation = generation), // 0
    (this.id = id), // 1
    (this.gender = gender); // 2 // set gender
  (this.name = Namer(this.gender)), // todo>    Make a name= ending - depending on gender  --> Look 14. Namer(gender) // 3
    (this.age = age), // 4
    (this.lifespan = InstalCreaturesData.lifespanCreature), // 5
    (this.parent1 = parent1), // 6
    (this.parent2 = parent2), // 7
    (this.CreaturesType = CreaturesType), // 8
    (this.subType = subType), // 9
    (this.mood = switchMood()), // todo>    Check the mood of creature :)  :(  :o   --> Look 16.switchMood() // 10
    (this.numInBase = 0); //11 - empty cell for now, used to randomly distribute objects of an array of creatures
  id++; // +1 to creature counter
}

//! 7.3 descriptionCreature(instCr=Array(12))   -   The description appears creatures
function descriptionCreature(Creature) {
  let txt = `A ${Creature.subType}-${Creature.gender} ${Creature.name} was born in generation ${Creature.generation}. `;
  txt1 = Creature.gender == "female" ? "She" : "Hi";
  txt += `${txt1} was № ${Creature.id} of all. Now their ${allCreatures.length}.  ${txt1} said: ${Creature.mood}`;
  Log(txt);
}

// ! 8.  Life() --> mixCreatures, meetingtolk, lifespanFunc, CheckBirth, Aging
function Life() {
  let mixCrKeys = mixCreatures(); // todo>    Mixed array of creatures --> Look 9.mixCreatures()
  for (first = 0; first < mixCrKeys.length; first = first + 2) {
    // we go through the array with a step of 2, selecting random pairs
    if (first == mixCrKeys.length - 1) continue; // check for the existence of the interlocutor
    meetingtolk([mixCrKeys[first], mixCrKeys[first + 1]]); // todo> Mood swings, chatter at a meeting --> Look 10.meetingtolk(Cr1,Cr2)
    lifespanFunc([mixCrKeys[first], mixCrKeys[first + 1]]); // todo>   + 1/0 / -1 year of the creature's life, depending on who you met by chance
    // todo>                                                   --> Look  11. lifespanFunc(Cr1,Cr2)
    checkBirth([mixCrKeys[first], mixCrKeys[first + 1]]); // todo>  Check the possibility of birth   --> Look 12. CheckBirth(Cr1,Cr2)
  }
  Aging(); // growing up being on one year    // todo> --> Look 20. Aging()
}

// ! 9. mixCreatures()
function mixCreatures() {
  // let mixingCreatures = [];
  let numCreature, randomIndex, timeSlot;
  const mixCreaturesKeys = Object.keys(allCreatures); // primary number in turn
  for (
    numCreature = mixCreaturesKeys.length - 1;
    numCreature >= 0;
    numCreature--
  ) {
    randomIndex = Math.floor(Math.random() * (numCreature + 1));
    timeSlot = mixCreaturesKeys[randomIndex];
    mixCreaturesKeys[randomIndex] = mixCreaturesKeys[numCreature];
    mixCreaturesKeys[numCreature] = timeSlot;
  }
  return mixCreaturesKeys;
}

// ! 10 meetingtolk(Creature=Array(2))
function meetingtolk(Creature = Array(2)) {
  if (LogSwitch.Dialogs != 0) historyWrite([Creature[0], Creature[1]]); // Сompose meeting history // todo> --> Look   historyWrite (Creature=Array(2))
  allCreatures[Creature[0]].mood = switchMood(); // mood 1 changes when thay meet  :)  :(  :o  --> Look 16.switchMood()
  allCreatures[Creature[1]].mood = switchMood(); // mood 2 changes  --> Look 16.switchMood()
  if (LogSwitch.Dialogs != 0) DialogWrite([Creature[0], Creature[1]]); // Сompose meeting dialog // todo> --> Look   DialogWrite (Creature=Array(2))
}

// ! 10.1 historyWrite(Creatures=Array(2))    -   Сompose meeting history
function historyWrite(Creatures = Array(2)) {
  // Сompose meeting history
  let history = "Met a ";
  itaration = 0;
  Creatures.forEach((Number) => {
    history =
      history +
      allCreatures[Number].gender +
      "-" +
      allCreatures[Number].subType +
      " " +
      allCreatures[Number].name +
      ", " +
      allCreatures[Number].age +
      ' y.o., who say: " ' +
      allCreatures[Number].mood +
      '" ';
    if (itaration < Creatures.length - 1) history = history + "\nand "; // add "and" only on the first iteration
    itaration++;
  });
  Log(history); // write meeting history
}

// ! 10.2 DialogWrite(Creature=Array(2))    -   Сompose dialog
function DialogWrite(Creature = Array(2)) {
  // Write dialog of creatures
  let hi1 = allCreatures[Creature[0]].gender == "male" ? "Mr. " : "Miss "; // call the interlocutor depending on gender
  let hi2 = allCreatures[Creature[1]].gender == "male" ? "Mr. " : "Miss ";
  let NameSubType1 =
      allCreatures[Creature[0]].name + allCreatures[Creature[0]].subType,
    NameSubType2 =
      allCreatures[Creature[1]].name + allCreatures[Creature[1]].subType,
    NewSmile1 = allCreatures[Creature[0]].mood,
    NewSmile2 = allCreatures[Creature[1]].mood;
  let dialog =
    // creature1:-Hello "Mr./Miss"  "name creature2" - "subType creature2" ,  creature2: ... greets too
    ` ${NameSubType1}: -Hello ${hi2}${NameSubType2}! ${NewSmile1}
 ${NameSubType2}: -Hello ${hi1}${NameSubType1}! ${NewSmile2}`;
  Log(dialog); // write meeting dialog
}

// ! 11.  lifespanFunc(Creature=Array(2))
function lifespanFunc(Creature = Array(2)) {
  // 1-Wood 2-Steel 3-Spirit 4-Water  ;  4+1 1-2  2+3- 2-4  3+1  4-3 (1st can give birth  after die -> 1st havn't  "+")
  let coupleType =
    String(allCreatures[Creature[0]].CreaturesType) +
    String(allCreatures[Creature[1]].CreaturesType); // give combination of types
  let lifespan = [0, 0]; // label for increase/decrease of creature1 & creature2 lifespan
  switch (
    coupleType // if the types of interlocutors make up any of the combinations, // then the life span of the specified creature will change
  ) {
    case "14":
      lifespan[1]++;
      break;
    case "41":
      lifespan[0]++;
      break;
    case "12":
      lifespan[0]--;
      break;
    case "21":
      lifespan[1]--;
      break;
    case "23":
      lifespan[0]++;
      lifespan[1]--;
      break;
    case "32":
      lifespan[0]--;
      lifespan[1]++;
      break;
    case "24":
      lifespan[0]--;
      break;
    case "42":
      lifespan[1]--;
      break;
    case "31":
      lifespan[0]++;
      break;
    case "13":
      lifespan[1]++;
      break;
    case "43":
      lifespan[0]--;
      break;
    case "34":
      lifespan[1]--;
      break;
  }

  if (LogSwitch.Dialogs != 0) {
    let dialog = "";
    for (let companion = 0; companion < Creature.length; companion++) {
      if (lifespan[companion] != 0) {
        companion1 = companion == 0 ? 1 : 0; // j1 - indicates the location in the array of the interlocutor
        let Name1 =
            allCreatures[Creature[companion]].name +
            allCreatures[Creature[companion]].subType,
          Name2 =
            allCreatures[Creature[companion2]].name +
            allCreatures[Creature[companion2]].subType;
        switch (lifespan[companion]) {
          case 1:
            allCreatures[Creature[companion]].mood = smile(); // the creature feels better, it smiles
            dialog = Name1 + ":Very good with you," + Name2 + "!  " + smile();
            if (
              allCreatures[Creature[companion]].lifespan -
                allCreatures[Creature[companion]].age ==
              1
            )
              dialog = dialog + " You raised me!";
            break;
          case -1:
            allCreatures[Creature[companion]].mood = cry(); // creature worse from communication, it cries
            dialog = Name1 + ": It's not fun with you," + Name2 + "!" + cry();
            if (
              allCreatures[Creature[companion]].lifespan -
                allCreatures[Creature[companion]].age <=
              0
            )
              dialog = dialog + " You killed me!";
            break;
        }
      }
    }
  }
  allCreatures[Creature[0]].lifespan += lifespan[0]; //lifespan +1/0/-1
  allCreatures[Creature[1]].lifespan += lifespan[1]; //lifespan +1/0/-1
}

// ! 12. CheckBirth(Creature=Array(2))
function checkBirth(Creature = Array(2)) {
  let if1 = // condition 1
    allCreatures[Creature[0]].age > 2 && // if age >2 (adult creatures)
    allCreatures[Creature[1]].age > 2 &&
    allCreatures[Creature[0]].gender != allCreatures[Creature[1]].gender; // and gender are different
  if (if1) {
    let if2 =
      allCreatures[Creature[0]].CreaturesType ==
      allCreatures[Creature[1]].CreaturesType; // condition 2: if types of creatures is equal -
    if (if2) {
      let subType = install_TypeSubType(
        allCreatures[Creature[0]].CreaturesType
      );
      BirthCreatures(allCreatures[Creature[0]].CreaturesType, [
        Creature[0],
        Creature[1],
      ]); // "Birth Same rase!" // todo>   Birth   --> Look 13. BirthCreatures(Creature[0], Creature[1], nType)
    } else {
      // if types of creatures is NOT equal
      let st1 = allCreatures[(Creature[0], 9)], //subType 1 creature
        st2 = allCreatures[(Creature[1], 9)]; //subType 2 creature
      if3 = //   condition 3
        (st1 == "spirit" && st2 == "waterSream") ||
        (st2 == "spirit" && st1 == "waterSream"); //if "Half-breed!"
      if (if3) {
        // Rase-probability 50/50 "spirit" / "water"
        CreaturesType = rnd(2, -1) == 1 ? "spirit" : "water"; // 3 -spirit / 4-water (subType - randomly choose subTipe - Ice/Water/Sream)
        BirthCreatures(CreaturesType, [Creature[0], Creature[1]]);
      }
      // todo>   Birth Half-breed  --> Look 13. BirthCreatures(Creature[0], Creature[1], nCreaturesType)
    }
  }
}

// ! 13 BirthCreatures(CreaturesType, Creature=Array(2))
function BirthCreatures(CreaturesType, Creature = Array(2)) {
  let parent = [
    // parents name-type for logs :
    allCreatures[Creature[0]].name + "-" + allCreatures[Creature[0]].subType,
    allCreatures[Creature[1]].name + "-" + allCreatures[Creature[1]].subType,
  ];
  // declaration of love, if dialogues are included and parents are different (not a tree)
  if (
    LogSwitch.Dialogs != 0 &&
    allCreatures[Creature[0]].id != allCreatures[Creature[1]].id
  )
    Log(`${parent[0]}: - I love you! 
${parent[1]}: - I love you too! `);
  if (allCreatures.length <= 5000000) {
    // if number not big -borning, else overflow of population
    let gender = rnd(2, 0) == 1 ? "female" : "male",
      age = 0,
      parent1 = Creature[0], // generation 0   id 1  gender 2  nameCr 3  age 4  lifespan 5
      parent2 = Creature[1], // parent1 6  parent2 7   Type 8   subType 9    mood 10   numInBase 11
      subType = install_TypeSubType(CreaturesType); // todo>    Entering the CreaturesType and subType of the creature --> Look 15.install_TypeSubType(nType)
    mood = switchMood(); // todo>  Check the mood of creature :)  :(  :o  --> Look 16.switchMood()
    allCreatures.push(
      // added the Creature object to the array
      new CreatureConstructor(
        gender,
        age,
        parent1,
        parent2,
        CreaturesType,
        subType
      )
    );
    if (LogSwitch.typeWhoBorn != 0)
      // todo>    Created a description of the creature
      Log(
        subType +
          " is Born !!! happy parents " +
          parent[0] +
          " and " +
          parent[1]
      ); // show subType who was born
    if (LogSwitch.detaleWhoBorn != 0)
      descriptionCreature(allCreatures[allCreatures.length - 1]); // display the parameters of the new creature / if LogSwitch !=""
  }
}

// ! 14. Namer(gender) -   make a name: ending - depending on gender, the rest of the letters - by alternating consonants and vowels
function Namer(gender) {
  // dictionary of consonants
  consonants = [
    "q",
    "w",
    "r",
    "t",
    "n",
    "m",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
  ];
  consonantsLen = consonants.length; // consonant dictionary size
  vowels = ["e", "y", "u", "o", "a"]; // dictionary of vowel
  vowelsLen = vowels.length; //vowel dictionary size
  femEndingNames = ["y", "a", "e"]; //  dictionary of ends of female names
  femEndNamesLen = femEndingNames.length; //  dictionary size of female names ends
  nameLen = rnd(10, 1); //name length - from 2 to 11 letters
  nameCreature = ""; // empty name
  if (gender == "female") {
    vowelСonsonantSwitch = -1; //  letter label to insert into name in next time
  } else {
    vowelСonsonantSwitch = 1;
  }
  let letter = "";
  for (letterName = 0; letterName < nameLen; letterName++) {
    // we type the required number of characters in the name
    // choose the ending of the female/male name depends of gender
    if (vowelСonsonantSwitch == -1) {
      // first choise - random female ending of name, else - random vowel
      if (letterName == 0) {
        letter = femEndingNames[rnd(femEndNamesLen, -1)];
      } else {
        letter = vowels[rnd(vowelsLen, -1)];
      }
    } else {
      letter = consonants[rnd(consonantsLen, -1)];
    }
    // add letter first (Big UpperCase) or other (small lowercase)
    if (letterName == nameLen - 1) letter = letter.toUpperCase();
    nameCreature = letter + nameCreature; // push the letter to the name
    vowelСonsonantSwitch = -vowelСonsonantSwitch; // Replace consonant/vowel label to select next letter
  }
  return nameCreature;
}

// ! 15. install_TypeSubType(CreaturesType)    -  entering the type and subtype of the creature
function install_TypeSubType(CreaturesType) {
  let subType; // entering the subtype of the creature depending on the conditional Type
  switch (CreaturesType) {
    case ("wood", "steel", "spirit"):
      return (subType = CreaturesType);
    case "water":
      subType = rnd(3, 0);
      switch (subType) {
        case 1:
          return (subType = "ice");
        case 2:
          return (subType = "liquid");
        case 3:
          return (subType = "sream");
      }
  }
}

// ! 16. switchMood()   - Check the mood of creature :)  :(  :o
function switchMood() {
  let mood;
  switch (
    rnd(3, 0) // mood
  ) {
    case 1:
      mood = talk(); // --> Look 17.talk()
      break;
    case 2:
      mood = smile(); // --> Look 18.smile()
      break;
    case 3:
      mood = cry(); // --> Look 19.cry()
      break;
  }
  return mood;
}

// ! 17. talk()
function talk() {
  return "Ж:-O  bla-bla";
}
// ! 18. smile()
function smile() {
  return "Ж:-D  Ha-ha!";
}
// ! 19. cry()
function cry() {
  return "Ж:  wee-wee.. ";
}

// ! 20. Aging()   -  growing up being on one year
function Aging() {
  for (let i = allCreatures.length - 1; i >= 0; i--) {
    allCreatures[i].age++; //  age growth
    DeathСheck(i); // todo>   check whether the time to die)    --> Look 21.DeathСheck(i)
  }
}

// ! 21. DeathСheck(i)  -  check if the time to die this creature
function DeathСheck(i) {
  if (allCreatures[i].lifespan - allCreatures[i].age <= 0) {
    //if the life resource is more than or equal to age
    if (LogSwitch.typeWhoDiedAge != 0)
      Log(
        "death " +
          allCreatures[i].subType +
          " " +
          allCreatures[i].name +
          " it was " +
          allCreatures[i].age
      ); // show type who died  / if LogSwitch != ""
    if (allCreatures[i].CreaturesType == 1) {
      // if dying type==wood
      if (rnd(2, -1) == 1) {
        // then 50% probability - with death of wood -> borning wood.
        BirthCreatures(allCreatures[i].CreaturesType, [i, i]); // Same rase // todo>   Birth --> Look 13. BirthCreatures(Parent1, Parent1, CreaturesType=1/wood/)
      }
    }
    allCreatures[i] = allCreatures[allCreatures.length - 1]; // rewrote the last creature in the array to the place of the deceased,
    allCreatures.pop(); // and then deleted the last entry in the array
  }
}

//! 23. rnd(a, b)  -  a random number from a given number with a shift of the initial element
function rnd(a, b) {
  return Math.ceil(Math.random() * a + b); //  rnd(3,-1) --> choice from 0 , 1 , 2 ;  rnd(4,2) --> choice from 3 , 4 , 5, 6
}
