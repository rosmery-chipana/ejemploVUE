<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/primaria_crear">Agregar primaria</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">grado</th>
                                <th scope="col">peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in primaria">
                                <td>{{ data.nombre }}</td>
                                <td>{{ data.grado }}</td>
                                <td>{{ data.peso }}</td>
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/primaria_editar/' + data.id">Editar</RouterLink>
                                    <button class="btn btn-danger" @click="eliminar(data.id)">Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { collection, getDocs, query, where,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            loadingDoc: false,
            primaria: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.primaria= []
                const q = query(
                    collection(db, "primaria")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.primaria.push({
                        nombre: doc.data().nombre,
                        grado: doc.data().grado,
                        peso: doc.data().peso,
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.curso);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "primaria", id);
                const docRef = await deleteDoc(q);
                this.getUrls()
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUrls()
    }
})
</script>