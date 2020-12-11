/**   About program:
This is a program for curious young people, nature lovers and Greenpeace people!
! By running the creatures.js file, you start the menagerie's life model!
The menagerie includes 4 types of creatures:
1-Wooden, 2-Steel, 3-Spiritual, 4-Water.
Water (type 4) creatures are in 3 states (subtypes):
Ice, Water, Steam, which change chaotically every cycle.
Creatures are male and female.
? Initial data can be entered in "function initialData ()" (edit values ​​are allowed)
? InstalCreatorsData1 = [1.cycleTime (minutes), 2.lifeTimeMenagerie (minutes), 3.lifespan]
? InstalCreatorsData2 = [4.Wood, 5.WoodFemale, 6.Steel, 7.SteelFemale, 8.Spirit, 9.SpiritFemale]
? InstalCreatorsData3 = [10. WaterIce 11.WaterIceFemale, 12.Water, 13.WaterIceFemale, 14.WaterSream, 15.WaterSream];
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

/** ! 1. initialData()                    (after declare global counters) */
function initialData() {
  // count of              1.cycleTime (minutes) (if "0" -> without delay) 2.lifeTimeMenagerie  (minutes)  3.lifespan
  let InstalCreatorsData1 = [0, 1, 10];
  // typeCreature:         4.Wood   5.WoodFemale   6.Steel   7.SteelFemale   8.Spirit     9.SpiritFemale
  let InstalCreatorsData2 = [12, 6, 12, 6, 12, 6];
  //  typeWaterCreature:   10. WaterIce   11.WaterIceFemale   12.Water   13.WaterIceFemale  14.WaterSream   15.WaterSream
  InstalCreatorsData3 = [4, 2, 4, 2, 4, 2];
  // Log parts switches. Put something in quotation marks to include the corresponding log.
  // 0. write Generation   1. write statistic for year
  // 2. statistic every 5-th generation & statistic when zeroing amount of any type
  // 3. display the parameters of the new creature
  // 4. dialogs   5. type who died   6.  detale who was born   7. type who died
  //            0 , 1,  2, 3 , 4 , 5 , 6 , 7
  LogSwitch = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let sum = 0;
  for (i = 0; i < 6; i = i + 2) {
    sum += InstalCreatorsData2[i];
    sum += InstalCreatorsData3[i];
  }
  InstalCreatorsData = InstalCreatorsData1.concat(
    InstalCreatorsData2,
    InstalCreatorsData3,
    [sum]
  ); // todo> array of initial data is created
}

// ! 2.  BEGIN of the Program
{
  console.log("Big Bang !!!");
  var InstalCreatorsData = []; // todo>   We declare global counters and data arrays :
  var allCreatures = []; // array for menagerie creatures
  var stat0 = [1, 1, 1, 1, 1, 1]; // array-label for nullified array of statistic
  var generation = 0; // for 1-st generation
  var id = 0; // counter of creatur
  var nType = 1, // counter of Types & subTypes of creatures
    Type; // label of types
  initialData(); // todo>   initial Data --> Look 0.initialData()
  timerOfWarld(); // todo>   turn on the timer of cycles (years or generations) --> Look 3.timerOfWarld()
}

// ! 3. timerOfWarld()
function timerOfWarld() {
  // todo>   the time of civilization flows here, the cycle time and the life time of the menagerie are set until the End of the World
  if (InstalCreatorsData[0] == 0) {
    // if time-interval==0 , then easy cycle
    for (nc = 1; nc < 10000000; nc++) {
      newYear(); // todo>     year after year --> Look newYear()
    }
  } else {
    // else turn on the cycle timer
    let timer = setInterval(() => newYear(), InstalCreatorsData[0] * 60 * 1000); // repeat newYear after "cycleTime" minutes
    setTimeout(() => {
      clearInterval(timer); // and set the End of the World
      console.log("End of the Warld !");
    }, InstalCreatorsData[1] * 60 * 1000); // lifeTimeMenagerie (minutes) - when to stop output
  }
}

// ! 4. newYear()
function newYear() {
  if (generation == 0) {
    InstallCreatures(); // todo>   if it's first Year --> Look InstallCreatures()
  } else {
    Life(); // todo>        if it's not the first time --> Look 8.Life()
  }
  if (LogSwitch[0] != "") console.log("Generation " + generation); // Show current number Generation (cycle,year) / if LogSwitch!=""
  if (LogSwitch[1] != "") statistic(); // todo>     show statistics of the past year --> Look 5.statistic()  /  if LogSwitch!=""
  generation++;
}

// ! 5. statistic()   -> show statistics of the past year
function statistic() {
  let s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < allCreatures.length; i++) {
    // go through all the creatures of the main array of creatures
    if (allCreatures[i][2] == "female") {
      s[0]++; // counter female
    } else {
      s[1]++; // counter male
    }
    switch (allCreatures[i][8]) {
      case 1:
        {
          s[2]++; // counter type of Wood (& female, & male)
          if (allCreatures[i][2] == "female") {
            s[3]++;
          } else {
            s[4]++;
          }
        }
        break;
      case 2:
        {
          s[5]++; // counter type of Steel (& female, & male)
          if (allCreatures[i][2] == "female") {
            s[6]++;
          } else {
            s[7]++;
          }
        }
        break;
      case 3:
        {
          s[8]++; // counter type of Spirite (& female, & male)
          if (allCreatures[i][2] == "female") {
            s[9]++;
          } else {
            s[10]++;
          }
        }
        break;
      case 4:
        {
          s[11]++; // counter type of Water  (& female, & male)
          if (allCreatures[i][2] == "female") {
            s[12]++;
          } else {
            s[13]++;
          }
          switch (allCreatures[i][9]) {
            case "waterIce":
              {
                s[14]++; // counter subType of waterIce (& female, & male)
                if (allCreatures[i][2] == "female") {
                  s[15]++;
                } else {
                  s[16]++;
                }
              }
              break;
            case "water":
              {
                s[17]++; // counter subType of water (& female, & male)
                if (allCreatures[i][2] == "female") {
                  s[18]++;
                } else {
                  s[19]++;
                }
              }
              break;
            case "waterSream":
              {
                s[20]++; // counter subType of waterSream (& female, & male)
                if (allCreatures[i][2] == "female") {
                  s[21]++;
                } else {
                  s[22]++;
                }
              }
              break;
          }
        }
        break;
    }
  }
  doStat = 0; // Label for nullified array of statistic =0
  if (stat0[0] == 1 && s[2] == 0) {
    // track the moment of zeroing the number of some kind of creatures for an extraordinary output of statistical data
    stat0[0] = 0; // for Wood-type
    doStat = 1; // label for ivent
  }
  if (stat0[1] == 1 && s[5] == 0) {
    stat0[1] = 0; // for Steel-type
    doStat = 1;
  }
  if (stat0[2] == 1 && s[8] == 0) {
    // for Spitit-type
    stat0[2] = 0;
    doStat = 1;
  }
  if (stat0[3] == 1 && s[11] == 0) {
    // for Water-type
    stat0[3] = 0;
    doStat = 1;
  }
  // if LogSwitch[2]!=""
  // --> Write statistic every 5-th generation & statistic when zeroing amount of any type of creatures
  //     otherwise --> Write all statistics every time.
  if (LogSwitch[2] != "") {
    if (generation % 5 == 0 || doStat == 1) logstat(s);
  } else {
    logstat(s);
  }
  // todo>    Result print to console --> Look 6.logstat(s)
}

// ! 6. logstat(s)  - statistics log by type
function logstat(s) {
  console.log(
    "All-" +
      allCreatures.length +
      " f-" +
      s[0] +
      "/m-" +
      s[1] +
      "\n" +
      "Wood-" +
      s[2] +
      " f-" +
      s[3] +
      "/m-" +
      s[4] +
      "\n" +
      "Steel-" +
      s[5] +
      " f-" +
      s[6] +
      "/m-" +
      s[7] +
      "\n" +
      "Spirit-" +
      s[8] +
      " f-" +
      s[9] +
      "/m-" +
      s[10] +
      "\n" +
      "Water-" +
      s[11] +
      " f-" +
      s[12] +
      "/m-" +
      s[13] +
      "\n" +
      "waterIce-" +
      s[14] +
      " f-" +
      s[15] +
      "/m-" +
      s[16] +
      "\n" +
      "water-" +
      s[17] +
      " f-" +
      s[18] +
      "/m-" +
      s[19] +
      "\n" +
      "WaterSream-" +
      s[20] +
      " f-" +
      s[21] +
      "/m-" +
      s[22] +
      "\n"
  );
}

//! 7.  InstallCreatures()  - creating an initial set
function InstallCreatures() {
  // of creatures based on the initial data in initialData () at program start,
  //as well as setting all initial parameters for each created creature
  let gend = "",
    nameCr = "",
    age = 1,
    lifespan = 10,
    parent1 = 0,
    parent2 = 0;
  for (InstDat = 3; InstDat < 14; InstDat += 2) {
    countOfType = InstalCreatorsData[InstDat]; // memorized the number of creatures of this type
    countOfFam = InstalCreatorsData[InstDat + 1]; // number of females of this type
    for (CreatorOfType = 1; CreatorOfType <= countOfType; CreatorOfType++) {
      //  Сreating a group of creatures of this type
      gend = CreatorOfType <= countOfFam ? "female" : "male"; // set gender
      nameCr = Namer(gend); // todo>    Make a name: ending - depending on gender  --> Look 14. Namer(gender)
      subType = install_TypeSubType(nType); // todo>    Entering the Type and subType of the creature --> Look 15.install_TypeSubType(nType)
      mood = switchMood(); // todo>    Check the mood of creature :)  :(  :o   --> Look 16.switchMood()
      numInBase = 0; // numInBase -  cell is used to randomly distribute objects of an array of creatures
      let instCr = [
        // todo>    Created a description of the creature
        generation, // 0
        id, // 1
        gend, // 2
        nameCr, // 3
        age, // 4
        lifespan, // 5
        parent1, // 6
        parent2, // 7
        Type, // 8
        subType, // 9
        mood, // 10
        numInBase, //11 - empty cell for now
      ];
      if (LogSwitch[3] != "") descriptionCreature(instCr); // display the parameters of the new creature / if LogSwitch[3]!=""
      allCreatures.push(instCr); // added a creature to the array of creatures
      id++; // +1 to creature counter
    }
    nType++; // go to the next type (subtype)
  }
  id--; // removed the last redundant addition to the creature counter
}

//! 7.1 descriptionCreature(instCr=Array(12))   -   The description appears creatures
function descriptionCreature(instCr = Array(12)) {
  let txt = `A ${instCr[9]}-${instCr[2]} ${instCr[3]} was born in generation ${instCr[0]}. `;
  txt1 = instCr[2] == "female" ? "She" : "Hi";
  txt += `${txt1} was № ${instCr[1]} of all. Now their ${allCreatures.length}.  ${txt1} said: ${instCr[10]}`;
  console.log(txt);
}

// ! 8.  Life() --> mixCreatures, meetingtolk, lifespanFunc, CheckBirth, Aging
function Life() {
  let arr = mixCreatures(); // todo>    Mixed array of creatures --> Look 9.mixCreatures()
  for (i = 0; i < arr.length; i = i + 2) {
    // we go through the array with a step of 2, selecting random pairs
    if (i == arr.length - 1) continue; // check for the existence of the interlocutor
    meetingtolk([arr[i], arr[i + 1]]); // todo> Mood swings, chatter at a meeting --> Look 10.meetingtolk(Cr1,Cr2)
    lifespanFunc([arr[i], arr[i + 1]]); // todo>   + 1/0 / -1 year of the creature's life, depending on who you met by chance
    // todo>                                                   --> Look  11. lifespanFunc(Cr1,Cr2)
    checkBirth([arr[i], arr[i + 1]]); // todo>  Check the possibility of birth   --> Look 12. CheckBirth(Cr1,Cr2)
  }
  Aging(); // growing up being on one year    // todo> --> Look 20. Aging()
}

// ! 9. mixCreatures()
function mixCreatures() {
  let arr = [];
  let i, j;
  for (i = 0; i < allCreatures.length; i++) {
    allCreatures[i][11] = i; // primary number in turn
    arr[i] = allCreatures[i][11]; // fix this indexes to array intermediate
  }
  var cr1;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    cr1 = arr[j];
    arr[j] = arr[i];
    arr[i] = cr1;
  }
  return arr;
}

// ! 10 meetingtolk(Creator=Array(2))
function meetingtolk(Creator = Array(2)) {
  if (LogSwitch[4] != "") historyWrite([Creator[0], Creator[1]]); // Сompose meeting history // todo> --> Look   historyWrite (Creator=Array(2))
  allCreatures[Creator[0]][10] = switchMood(); // mood 1 changes when thay meet  :)  :(  :o  --> Look 16.switchMood()
  allCreatures[Creator[1]][10] = switchMood(); // mood 2 changes  --> Look 16.switchMood()
  if (LogSwitch[4] != "") DialogWrite([Creator[0], Creator[1]]); // Сompose meeting dialog // todo> --> Look   DialogWrite (Creator=Array(2))
}

// ! 10.1 historyWrite(Creator=Array(2))    -   Сompose meeting history
function historyWrite(Creator = Array(2)) {
  // Сompose meeting history
  let history = "Met ";
  for (let j = 0; j < Creator.length; j++) {
    history =
      history +
      allCreatures[Creator[j]][9] +
      " " +
      allCreatures[Creator[j]][2] +
      ", " +
      allCreatures[Creator[j]][4] +
      " years old " +
      allCreatures[Creator[j]][10];
    if (j == 0) history = history + " and ";
  }
  console.log(history); // write meeting history
}

// ! 10.2 DialogWrite(Creator=Array(2))    -   Сompose dialog
function DialogWrite(Creator = Array(2)) {
  // Write dialog of creatures
  let hi1 = allCreatures[Creator[0]][2] == "male" ? "Mr. " : "Miss "; // call the interlocutor depending on gender
  let hi2 = allCreatures[Creator[1]][2] == "male" ? "Mr. " : "Miss ";
  let NameSubType1 = allCreatures[Creator[0]][3] + allCreatures[Creator[0]][9],
    NameSubType2 = allCreatures[Creator[1]][3] + allCreatures[Creator[1]][9],
    NewSmile1 = allCreatures[Creator[0]][10],
    NewSmile2 = allCreatures[Creator[1]][10];
  let dialog = // creature1:-Hello "Mr./Miss"  "name creature2" - "subType creature2" ,  creature2: ... greets too
    NameSubType1 +
    ": " +
    "-Hello " +
    hi2 +
    NameSubType2 +
    "! " +
    NewSmile1 +
    "\n" +
    NameSubType2 +
    ": " +
    "-Hello " +
    hi1 +
    NameSubType1 +
    "! " +
    NewSmile2;
  console.log(dialog); // write meeting dialog
}

// ! 11.  lifespanFunc(Creator=Array(2))
function lifespanFunc(Creator = Array(2)) {
  // 1-Wood 2-Steel 3-Spirit 4-Water  ;  4+1 1-2  2+3- 2-4  3+1  4-3 (1st can give birth  after die -> 1st havn't  "+")
let coupleType =
    String(allCreatures[Creator[0]][8]) +
    String(allCreatures[Creator[1]][8]); // give combination of types
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

  if (LogSwitch[4] != "") {
    let dialog = "";
    for (let j = 0; j < Creator.length; j++) {
      if (lifespan[j] != 0) {
        j1 = j == 0 ? 1 : 0; // j1 - indicates the location in the array of the interlocutor
        let Name1 = allCreatures[Creator[j]][3] + allCreatures[Creator[j]][9],
          Name2 = allCreatures[Creator[j1]][3] + allCreatures[Creator[j1]][9];
        switch (lifespan[j]) {
          case 1:
            allCreatures[Creator[j]][10] = smile(); // the creature feels better, it smiles
            dialog = Name1 + ":Very good with you," + Name2 + "!  " + smile();
            if (allCreatures[Creator[j]][5] - allCreatures[Creator[j]][4] == 1)
              dialog = dialog + " You raised me!";
            break;
          case -1:
            allCreatures[Creator[j]][10] = cry(); // creature worse from communication, it cries
            dialog = Name1 + ": It's not fun with you," + Name2 + "!" + cry();
            if (allCreatures[Creator[j]][5] - allCreatures[Creator[j]][4] <= 0)
              dialog = dialog + " You killed me!";
            break;
        }
      }
    }
  }
  allCreatures[Creator[0]][5] += lifespan[0]; //lifespan +1/0/-1
  allCreatures[Creator[1]][5] += lifespan[1]; //lifespan +1/0/-1
}

// ! 12. CheckBirth(Creator=Array(2))
function checkBirth(Creator = Array(2)) {
  let if1 = // condition 1
    allCreatures[Creator[0]][4] > 2 && // if age >2 (adult creatures)
    allCreatures[Creator[1]][4] > 2 &&
    allCreatures[Creator[0]][2] != allCreatures[Creator[1]][2]; // and gender are different
  if (if1) {
    let type1 = allCreatures[Creator[0]][8],
      type2 = allCreatures[Creator[1]][8];
    let if2 = type1 == type2; // condition 2: if types of creatures is equal -
    if (if2) {
      nType = type1 == 4 ? 4 + rnd(3, -1) : type1; // if type 4 (water), than randomly choose subTipe Ice/Water/Sream for newborn else easy type for newborn
      BirthCreatures(nType, [Creator[0], Creator[1]]); // "Birth Same rase!" // todo>   Birth   --> Look 13. BirthCreatures(Creator[0], Creator[1], nType)
    } //
    else {
      // if types of creatures is NOT equal
      let st1 = allCreatures[(Creator[0], 9)], //subType 1 creature
        st2 = allCreatures[(Creator[1], 9)]; //subType 2 creature
      if3 = //   condition 3
        (st1 == "spirit" && st2 == "waterSream") ||
        (st2 == "spirit" && st1 == "waterSream"); //if "Half-breed!"
      if (if3) {
        // Rase-probability 50/50 "spirit" / "water"
        nType = rnd(2, -1) == 1 ? 3 : 4 + rnd(3, -1); // 3 -spirit / 4-water (subType - randomly choose subTipe - Ice/Water/Sream)
      }
      BirthCreatures(nType, [Creator[0], Creator[1]]); // todo>   Birth Half-breed  --> Look 13. BirthCreatures(Creator[0], Creator[1], nType)
    }
  }
}

// ! 13 BirthCreatures(nType, Creator=Array(2))
function BirthCreatures(nType, Creator = Array(2)) {
  
  let parent = [// parents name-type for logs :
    allCreatures[Creator[0]][3] + "-" + allCreatures[Creator[0]][9],
    allCreatures[Creator[1]][3] + "-" + allCreatures[Creator[1]][9],
  ];
  // declaration of love, if dialogues are included and parents are different (not a tree)
  if (LogSwitch[4] != ""&&allCreatures[Creator[0]][1]!=allCreatures[Creator[0]][1])
    console.log(`${parent[0]}: - I love you! 
${parent[1]}: - I love you too! `);
  id++;
  let gend = rnd(2, 0) == 1 ? "female" : "male",
    nameCr = Namer(gend), // todo>  Make a name: ending - depending on gender    --> Look 14. Namer(gender)
    age = 0,
    lifespan = 10,
    parent1 = Creator[0],
    parent2 = Creator[1],
    subType = install_TypeSubType(nType); // todo>    Entering the Type and subType of the creature --> Look 15.install_TypeSubType(nType)
  mood = switchMood(); // todo>  Check the mood of creature :)  :(  :o  --> Look 16.switchMood()
  let instCr = [
    // todo>    Created a description of the creature
    generation, // 0
    id, // 1
    gend, // 2
    nameCr, // 3
    age, // 4
    lifespan, // 5
    parent1, // 6
    parent2, // 7
    Type, // 8
    subType, // 9
    mood, // 10
    numInBase, //11
  ];
  if (LogSwitch[5] != "")
    console.log(
      subType + " is Born !!! happy parents " + parent[0] + " and " + parent[1]
    ); // show subType who was born
  if (LogSwitch[6] != "") descriptionCreature(instCr); // show detale of the new creature / if LogSwitch[6]!=""
  allCreatures.push(instCr); // added a creature to the array of creatures
}

// ! 14. Namer(gender) -   make a name: ending - depending on gender, the rest of the letters - by alternating consonants and vowels
function Namer(gender) {
  consonants = [
    // dictionary of consonants
    `q`,
    `w`,
    `r`,
    `t`,
    `n`,
    `m`,
    `p`,
    `s`,
    `d`,
    `f`,
    `g`,
    `h`,
    `j`,
    `k`,
    `l`,
    `z`,
    `x`,
    `c`,
    `v`,
    `b`,
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

// ! 15. install_TypeSubType(nType)    -  entering the type and subtype of the creature
function install_TypeSubType(nType) {
  let subType;
  switch (
    // entering the type and subtype of the creature depending on the conditional code (nType) of the subtype
    nType // nType = 1,2,3,4,5,6 ==>  type/subtype: 1.Wood/wood  2.Steel/steel
  ) {
    // 3.Spirit/spirit  4.Water/(waterIce 5.water 6.waterSream)
    case 1:
      Type = nType;
      subType = "wood";
      break;
    case 2:
      Type = nType;
      subType = "steel";
      break;
    case 3:
      Type = nType;
      subType = "spirit";
      break;
    case 4:
      Type = nType;
      subType = "waterIce";
      break;
    case 5:
      Type = nType - 1;
      subType = "water";
      break;
    case 6:
      Type = nType - 2;
      subType = "waterSream";
      break;
  }
  return subType;
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
  return "Ж:'(  wee-wee.. ";
}

// ! 20. Aging()   -  growing up being on one year
function Aging() {
  for (let i = allCreatures.length - 1; i >= 0; i--) {
    allCreatures[i][4]++; //  age growth
    DeathСheck(i); // todo>   check whether the time to die)    --> Look 21.DeathСheck(i)
  }
}

// ! 21. DeathСheck(i)  -  check if the time to die this creature
function DeathСheck(i) {
  if (allCreatures[i][5] - allCreatures[i][4] <= 0) {
    //if the life resource is more than or equal to age
    if (LogSwitch[7] != "")
      console.log(
        "death " +
          allCreatures[i][9] +
          " " +
          allCreatures[i][3] +
          " it was " +
          allCreatures[i][4]
      ); // show type who died  / if LogSwitch[7] != ""
    if (allCreatures[i][8] == 1) {
      // if dying type==wood
      if (rnd(2, -1) == 1) {
        // then 50% probability - with death of wood -> borning wood.
        BirthCreatures(allCreatures[i][8], [i, i]); // Same rase // todo>   Birth --> Look 13. BirthCreatures(Parent1, Parent1, nType=1/wood/)
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

