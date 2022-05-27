export const tasksStaticData = [
    {
        "name": "Times",
        "description": "Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)\n\n    HH = hours, padded to 2 digits, range: 00 - 99\n    MM = minutes, padded to 2 digits, range: 00 - 59\n    SS = seconds, padded to 2 digits, range: 00 - 59\n\nThe maximum time never exceeds 359999 (99:59:59)\n\nYou can find some examples in the test fixtures.\n",
        "theory": "# Some theory before task *sd*!",
        "template": "function humanReadable (seconds) {\r\n  return '';\r\n}",
        "test": "strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');\r\nstrictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');\r\nstrictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');\r\nstrictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');\r\nstrictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');\r\nstrictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');\r\nstrictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');\r\nstrictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');\r\nstrictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');\r\nstrictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');"
    },
    {
        "name": "Sum of differences in array",
        "description": "Your task is to sum the differences between consecutive pairs in the array in descending order.\n### Example\n```\n[2, 1, 10]  -->  9\n```\n\nIn descending order: ```[10, 2, 1]```\n\nSum: ```(10 - 2) + (2 - 1) = 8 + 1 = 9```\n\nIf the array is empty or the array has only one element the result should be 0.",
        "theory": "Для выполнения задачи понадобится знания циклов:\n\n```for ([инициализация]; [условие]; [финальное выражение])```\n\nНапример:\n```\nlet arr = [1, 2, 10];\nfor (let i = 0; i < arr.length; i++){\n   console.log(arr[i]); // выведет 1, 2, 3\n}\n```",
        "template": "function sumOfDifferences(arr) {\r\n    // place your code here!\r\n}",
        "test": "strictEqual(sumOfDifferences([1, 2, 10]), 9, 'sumOfDifferences([1, 2, 10])');\nstrictEqual(sumOfDifferences([-3, -2, -1]), 2, 'sumOfDifferences([-3, -2, -1])');\n"
    },
    {
        "name": "Transposing a song",
        "description": "You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.\n#### Your task\n\nGiven a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.\n\n**Input notes may be represented both in flat and sharp notations (more on that below).**\n\n**For this task, assume that input is always valid and the song is at least 1 note long.**\n\n**Assume that interval is an integer between -12 and 12.**\n\n#### Short intro to musical notation\n\nTransposing a single note means shifting its value by a certain interval. \n\nThe notes are as following:\n```\nA, A#, B, C, C#, D, D#, E, F, F#, G, G#.\n```\nThis is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.\n\nAn alternative to sharp notation is the flat notation:\n\nA, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.\n\nThe 'b' after a note means that it is one step lower than the note.\nExamples\n```\n['G'] -> 5 steps -> ['C']\n['Db'] -> -4 steps -> ['A#']\n['E', 'F'] -> 1 step -> ['F', 'F#']\n```\n",
        "theory": "Graph graph graph graph...",
        "template": "function transpose(song, interval){\r\n  // ...\r\n}",
        "test": "[\n    [ ['A'], 1, ['A#'] ],\n    [ ['E'], 5, ['A'] ],\n    [ ['D#'] , 8  , ['B'] ],\n    [ ['Ab', 'Gb'] , 2  , ['A#', 'G#'] ],\n    [ ['Bb', 'C#', 'E'] , -4  , ['F#', 'A', 'C'] ],\n    [ ['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6  , ['E', 'G', 'G#', 'A', 'E', 'C', 'A'] ],\n    [ ['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4  , ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E'] ] \n].forEach(function(tst){\n    let inp = tst[0], int = tst[1], exp = tst[2], msg = `Input: [${inp}], ${int}`;\n    deepEqual(transpose(inp, int), exp, msg );\n    })"
    },
    {
        "name": "Prototype",
        "description": "Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Observer",
        "description": "The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Run-length encoding",
        "description": "\n" +
            "\n" +
            "    Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia\n" +
            "\n" +
            "Task\n" +
            "\n" +
            "Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.\n" +
            "Examples\n" +
            "\n" +
            "As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:\n" +
            "\n" +
            "runLengthEncoding(\"hello world!\")\n" +
            " //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]\n" +
            "\n" +
            "It's very effective if the same data value occurs in many consecutive data elements:\n" +
            "\n" +
            "runLengthEncoding(\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb\")\n" +
            " // => [[34,'a'], [3,'b']]\n",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Freudian translator",
        "description": "You probably know that number 42 is \"the answer to life, the universe and everything\" according to Douglas Adams' \"The Hitchhiker's Guide to the Galaxy\". For Freud, the answer was quite different...\n" +
            "\n" +
            "In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.\n" +
            "\n" +
            "Now, basically, when a person hears about Freud, s/he hears \"sex\" because for Freud, everything was related to, and explained by sex.\n" +
            "\n" +
            "In this task, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.\n",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Times 2",
        "description": "Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)\n\n    HH = hours, padded to 2 digits, range: 00 - 99\n    MM = minutes, padded to 2 digits, range: 00 - 59\n    SS = seconds, padded to 2 digits, range: 00 - 59\n\nThe maximum time never exceeds 359999 (99:59:59)\n\nYou can find some examples in the test fixtures.\n",
        "theory": "# Some theory before task *sd*!",
        "template": "function humanReadable (seconds) {\r\n  return '';\r\n}",
        "test": "strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');\r\nstrictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');\r\nstrictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');\r\nstrictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');\r\nstrictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');\r\nstrictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');\r\nstrictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');\r\nstrictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');\r\nstrictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');\r\nstrictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');"
    },
    {
        "name": "Sum of differences in array 2",
        "description": "Your task is to sum the differences between consecutive pairs in the array in descending order.\n### Example\n```\n[2, 1, 10]  -->  9\n```\n\nIn descending order: ```[10, 2, 1]```\n\nSum: ```(10 - 2) + (2 - 1) = 8 + 1 = 9```\n\nIf the array is empty or the array has only one element the result should be 0.",
        "theory": "Для выполнения задачи понадобится знания циклов:\n\n```for ([инициализация]; [условие]; [финальное выражение])```\n\nНапример:\n```\nlet arr = [1, 2, 10];\nfor (let i = 0; i < arr.length; i++){\n   console.log(arr[i]); // выведет 1, 2, 3\n}\n```",
        "template": "function sumOfDifferences(arr) {\r\n    // place your code here!\r\n}",
        "test": "strictEqual(sumOfDifferences([1, 2, 10]), 9, 'sumOfDifferences([1, 2, 10])');\nstrictEqual(sumOfDifferences([-3, -2, -1]), 2, 'sumOfDifferences([-3, -2, -1])');\n"
    },
    {
        "name": "Transposing a song 2",
        "description": "You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.\n#### Your task\n\nGiven a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.\n\n**Input notes may be represented both in flat and sharp notations (more on that below).**\n\n**For this task, assume that input is always valid and the song is at least 1 note long.**\n\n**Assume that interval is an integer between -12 and 12.**\n\n#### Short intro to musical notation\n\nTransposing a single note means shifting its value by a certain interval. \n\nThe notes are as following:\n```\nA, A#, B, C, C#, D, D#, E, F, F#, G, G#.\n```\nThis is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.\n\nAn alternative to sharp notation is the flat notation:\n\nA, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.\n\nThe 'b' after a note means that it is one step lower than the note.\nExamples\n```\n['G'] -> 5 steps -> ['C']\n['Db'] -> -4 steps -> ['A#']\n['E', 'F'] -> 1 step -> ['F', 'F#']\n```\n",
        "theory": "Graph graph graph graph...",
        "template": "function transpose(song, interval){\r\n  // ...\r\n}",
        "test": "[\n    [ ['A'], 1, ['A#'] ],\n    [ ['E'], 5, ['A'] ],\n    [ ['D#'] , 8  , ['B'] ],\n    [ ['Ab', 'Gb'] , 2  , ['A#', 'G#'] ],\n    [ ['Bb', 'C#', 'E'] , -4  , ['F#', 'A', 'C'] ],\n    [ ['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6  , ['E', 'G', 'G#', 'A', 'E', 'C', 'A'] ],\n    [ ['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4  , ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E'] ] \n].foreach(function(tst){\n    let inp = tst[0], int = tst[1], exp = tst[2], msg = `Input: [${inp}], ${int}`;\n    deepEqual(transpose(inp, int), exp, msg );\n    })"
    },
    {
        "name": "Prototype 2",
        "description": "Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Observer 2",
        "description": "The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming, including JavaScript. The Observer pattern facilitates good object-oriented design and promotes loose coupling.",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Run-length encoding 2",
        "description": "\n" +
            "\n" +
            "    Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia\n" +
            "\n" +
            "Task\n" +
            "\n" +
            "Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.\n" +
            "Examples\n" +
            "\n" +
            "As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:\n" +
            "\n" +
            "runLengthEncoding(\"hello world!\")\n" +
            " //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]\n" +
            "\n" +
            "It's very effective if the same data value occurs in many consecutive data elements:\n" +
            "\n" +
            "runLengthEncoding(\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb\")\n" +
            " // => [[34,'a'], [3,'b']]\n",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Freudian translator 2",
        "description": "You probably know that number 42 is \"the answer to life, the universe and everything\" according to Douglas Adams' \"The Hitchhiker's Guide to the Galaxy\". For Freud, the answer was quite different...\n" +
            "\n" +
            "In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.\n" +
            "\n" +
            "Now, basically, when a person hears about Freud, s/he hears \"sex\" because for Freud, everything was related to, and explained by sex.\n" +
            "\n" +
            "In this task, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.\n",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    },
    {
        "name": "Freudian translator 3",
        "description": "You probably know that number 42 is \"the answer to life, the universe and everything\" according to Douglas Adams' \"The Hitchhiker's Guide to the Galaxy\". For Freud, the answer was quite different...\n" +
            "\n" +
            "In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.\n" +
            "\n" +
            "Now, basically, when a person hears about Freud, s/he hears \"sex\" because for Freud, everything was related to, and explained by sex.\n" +
            "\n" +
            "In this task, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.\n",
        "theory": "Graph graph graph graph...",
        "template": "function asd() {\n    return \"\"\n}",
        "test": "strictEqual(asd(), '00:00:00', 'asd()');"
    }
];