import { useSetRecoilState } from "recoil"
import { listaDeReceitas } from "../atom"

const useSetRecipes = (recipes) => {
    const setRecipes = useSetRecoilState(listaDeReceitas)
    setRecipes(recipes)
}

export default useSetRecipes