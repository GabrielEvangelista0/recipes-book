import axios from "axios";
import useSetRecipes from "../state/hooks/useSetRecipes";
import { useRecoilValue } from "recoil";
import { listaDeReceitas } from "../state/atom";

export function getRecipes(){
    const setRecipes = useSetRecipes()
    axios.get('https://api.spoonacular.com/recipes/random?number=30&apiKey=b73fd94a241d457e8185de13a637ac03')
    .then(res => {
        
        const recipes = useRecoilValue(listaDeReceitas)
        setRecipes(res.data.recipes)
        console.log(recipes);
    })
    .catch(err => {
        console.log(err);
    })
}