

// requireds 
// const fs = require('fs');

//  "expres  ""  alguien lo hizo 
//" ./              nosotros creamos


const argv = require ('./config/yargs').argv;

const colors = require('colors/safe');




const { crearArchivo, listarTabla} = 
            require ('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando ){
    case 'listar':
        listarTabla( argv.base, argv.limite);

    break;

    case  'crear':
        
    crearArchivo (argv.base ,argv.limite)
        .then ( archivo => 
            console.log(
                `Archivo creado: 
                `, colors.blue (archivo)
                 ))
        .catch(e  => console.log(e));
            
    break;
    
    default:
        console.log('Comando no Reconocido');


}

// console.log(argv);




// console.log( process.argv );

// let argv2 = process.argv;

// console.log('Limite' , argv. limite);


// let parametro = argv[2];

// let base =parametro.split('=') [1]




