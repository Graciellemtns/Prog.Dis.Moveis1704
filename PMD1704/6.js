//6. Refaça o exercício 5 usando a construção async/await.

import 'dotenv/config';
import promptSync from 'prompt-sync';
import fetch from 'node-fetch';

const scanner = promptSync();

temp();

async function temp() {
    console.log('Selecione a opção:');
    console.log('1 - Inserir longitude e latitude');
    console.log('2 - Sair');

    const opcaoescolhida = +(scanner("> "));

    if (opcaoescolhida === 1) 
    {
        const [latitude, longitude] = await EntradaLatitudeLongitude();
        
	const fetchTask = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`,)
            .then(resp => 
		{
               	    resp.json()
                    	.then(x => 
			{
                            console.log(`\nTemperatura: ${x.main.temp}ºC\n`)
                            main();
                        });
                 })
            .catch(err => console.log('Errou ao consultar Api'))
    } 
    else if (opcaoescolhida !== 2) 
    {
        console.log("Opção inválida!\n");
        main();
    }
}

export function EntradaLatitudeLongitude() 
{
    while (true) 
    {
        const latitude = +(scanner("Digite a latitude: "));
        const longitude = +(scanner("Digite a longitude: "));

        if (!(isNaN(latitude) || isNaN(longitude))) 
	{
            return [latitude, longitude];
        }

        console.log("As entradas não são válidas, devem ser números");
    }
}