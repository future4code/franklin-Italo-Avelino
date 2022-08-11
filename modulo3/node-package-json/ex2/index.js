switch (process.argv[2]) {

    case "add":
        console.log(Number(process.argv[3]) + Number(process.argv[4]))
        break;

    case "sub":
        console.log(Number(process.argv[3]) - Number(process.argv[4]))
        break;

    case "mult":
        console.log(Number(process.argv[3]) * Number(process.argv[4]))
        break;

    case "div":
        console.log(Number(process.argv[3]) / Number(process.argv[4]))
        break;
}