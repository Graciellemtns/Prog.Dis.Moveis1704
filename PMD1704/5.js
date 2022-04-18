/*5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
1- Digitar latitude e longitude
2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.*/

import 'dotenv/config';
import promptSync from 'prompt-sync';
import fetch from 'node-fetch';

const scanner = promptSync();

temp();

function temp() {
    console.log('Selecione a opção:');
    console.log('1 - Inserir longitude e latitude');
    console.log('2 - Sair');

    const opcaoescolhida = +(scanner("> "));

    if (opcaoescolhida === 1) 
    {
        const [latitude, longitude] = EntradaLatitudeLongitude();
        
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