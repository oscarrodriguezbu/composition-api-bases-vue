
import { ref } from 'vue'

const useCounter = ( initValue = 5 ) => {

    const counter = ref( initValue ) //se guarda una referencia del valor

    return {
        counter,

        decrease: () => counter.value--,
        increase: () => counter.value++,
    }

}


export default useCounter