<template>
    <h1>Buscar pokémon: {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <!-- prevent para que no recargue la pagina -->
        <input type="number" placeholder="Número del pokémon" v-model="pokemonId" ref="txtSearchId">
    </form>
    <br>
    <span>Presione enter para buscar</span>

    <!-- Hay acceso al router desde aqui por si algo se necesita hacer con eso -->
    <!-- {{$router}} -->
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {

    setup() {

        const router = useRouter() //Acceso al router

        const pokemonId = ref(1)
        const txtSearchId = ref() //para solucionar un problema con el autofocus del input

        onActivated(() => {
            // txtSearchId.value.focus() //solo coloca el foco
            txtSearchId.value.select() // coloca el foco y selecciona el valor del input
        })

        return {
            pokemonId,
            txtSearchId,

            onSubmit: () => {
                // console.log('pokemon a buscar:', pokemonId.value )
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }
    }
}
</script>
