import getPokemon from 'json-pokemon/getPokemon';

function response(req,res) {
    for(let i=0; i < getPokemon.length; i++) {
        for(let k = 0; getPokemon[i].typeList.length; k++) {
            //return whatever that pokemon was and build an array of results
            //send back an object that is an array of what those objects are
            
            let result = {"error": "Could not find name."};

            let pokemon = getPokemon.getPokemonByType(req.query.type);

            if(pokemon == getPokemon[i].typeList.length) {
                result = pokemon;
            }
        }
    }
}

export default response;