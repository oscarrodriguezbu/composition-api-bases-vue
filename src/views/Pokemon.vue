<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

    <template v-else>
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        <br>
        <router-link
            :to="{ name: 'pokemon-search' }">
            Regresar</router-link>
    </template>

</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router' //onBeforeRouteLeave es un hook del ciclo de vida del router
import usePokemon from '../composables/usePokemon'

export default {

    setup() {

        const route = useRoute()
        // console.log(route.params.id)
        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id)

        watch( //hace siguimiento y se dispara cuando algo concreto cambie
            () => route.params.id, //cuando el id cambia...
            () => searchPokemon(route.params.id) //... se ejecuta esto
        )


        onBeforeRouteLeave(() => { //antes de salirse de la ruta. Se puede usar para limpiezas pero es mejor usar algo como deactivated o algo asi

            const answer = window.confirm('¿Está seguro que desea salir?')

            if (!answer) return false // false, bloquea la salida

        })


        return {
            errorMessage,
            isLoading,
            pokemon
        }

    }

}
</script>
