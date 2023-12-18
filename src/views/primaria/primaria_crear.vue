<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1 class="text-center">FICHA DE DATOS</h1>
                    <div class="mb-3">
                        <label class="form-label">ESCUELA PRIMARIA</label>
                        <input v-model="primaria.primaria" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">NOMBRE DEL ALUMNO</label>
                        <input v-model="primaria.nombre" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">GRADO</label>
                                <input v-model="primaria.grado" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">GRUPO</label>
                                <input v-model="primaria.grupo" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">

                            <div class="mb-3">
                                <label class="form-label">EDAD</label>
                                <input v-model="primaria.edad" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">FECHA DE NACIMIENTO</label>
                                <input v-model="primaria.nacimiento" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5">
                                <div class="mb-3">
                                    <label class="form-label">CURP</label>
                                    <input v-model="primaria.curp" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3">
                                    <label class="form-label">PESO</label>
                                    <input v-model="primaria.peso" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-3">
                                    <label class="form-label">ESTATURA</label>
                                    <input v-model="primaria.estatura" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label class="form-label">LUGAR DE NACIMIENTO</label>
                                        <input v-model="primaria.nacimiento" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">NACIONALIDAD</label>
                                        <input v-model="primaria.nacionalidad" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">DOMICILIO</label>
                                    <input v-model="primaria.domicilio" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="mb-3">
                                        <label class="form-label">ALERGICO A</label>
                                        <input v-model="primaria.alergico" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">TIPO DE SANGRE</label>
                                        <input v-model="primaria.sangre" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">NOMBRE DE MADRE</label>
                                    <input v-model="primaria.madre" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label class="form-label">NUMERO DE TELEFONO</label>
                                        <input v-model="primaria.telefono" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">OCUPACION</label>
                                        <input v-model="primaria.ocupacion" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">NOMBRE DEL PADRE</label>
                                    <input v-model="primaria.padre" type="email" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="mb-3">
                                        <label class="form-label">NUMERO DE TELEFONO</label>
                                        <input v-model="primaria.telefono" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="mb-3">
                                        <label class="form-label">OCUPACION</label>
                                        <input v-model="primaria.ocupacion" type="email" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/primaria_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            primaria: {
                primaria: '',
                grado: '',
                grupo: '',
                edad: '',
                nacimiento: '',
                curp: '',
                peso: '',
                estatura: '',
                nacimiento: '',
                nacionalidad: '',
                domicilio: '',
                alergico: '',
                sangre: '',
                madre: '',
                telefono: '',
                ocupacion: '',
                padre: '',
                telefono: '',
                ocupacion: '',
            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'primaria'));
                const docRef = await addDoc(q, this.primaria);
                this.$router.push({ name: 'primaria_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>