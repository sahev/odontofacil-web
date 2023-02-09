<template>
    <v-row>
        <v-col cols="10">
            <v-container>
                <v-card>
                    <v-table height="450px">
                        <thead>
                            <tr>
                                <th class="text-center">
                                    <v-card-subtitle>Dias da semana</v-card-subtitle>
                                </th>
                                <th class="text-center">
                                    Início
                                </th>
                                <th class="text-center">
                                    Término
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="day in this.selectedClinicalUnit.workDays" :key="day.name">
                                <td
                                    class="v-input v-input--density-default v-input--dirty v-checkbox v-input v-input--density-default v-input--dirty v-checkbox">
                                    <v-checkbox :label="day.name" v-model="day.enabled" color="primary">
                                    </v-checkbox>
                                </td>
                                <td>
                                    <Datepicker v-model="day.startTime" time-picker range
                                        placeholder="Selecione o horário" :disabled="!day.enabled" />
                                </td>
                                <td>
                                    <Datepicker v-model="day.endTime" time-picker range
                                        placeholder="Selecione o horário" :disabled="!day.enabled" />
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-container>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" variant="outlined" @click="setDefaultSchedule">
                    definir horário padrão
                </v-btn>
                <v-btn color="error" variant="outlined" @click="onCancel">
                    cancelar
                </v-btn>
                <v-btn color="success" variant="tonal" @click="onSave">
                    salvar
                </v-btn>
            </v-card-actions>
        </v-col>
    </v-row>
</template>
<script>
export default {
    emits: ['updateDialog','setDefaultWorkDays', 'onCancel'],
    props: ['selectedClinicalUnitProp'],
    methods: {
        setDefaultSchedule() {
            this.$emit('setDefaultWorkDays', this.defaultWorkDays);
        },
        onCancel() {
            this.$emit('updateDialog', false);
            this.$emit('onCancel', this.initialValue);

        },
        onSave() {
            console.log('save workdays', this.selectedClinicalUnit.workDays, this.selectedClinicalUnit.id);
            this.$emit('updateDialog', false);
        }
    },
    created() {
        if (!this.selectedClinicalUnit.workDays) {
            this.selectedClinicalUnit.workDays = { ...this.defaultWorkDays };
            // chamar endpoint de atualização de workdays passando o valor default
        }
    },
    data() {
        return {
            initialValue: { ...this.selectedClinicalUnitProp },
            selectedClinicalUnit: this.selectedClinicalUnitProp ,
            defaultWorkDays: [
                {
                    name: 'Segunda',
                    enabled: true,
                    startTime: [
                        {
                            hours: 9,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    endTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Terça',
                    enabled: true,
                    startTime: [
                        {
                            hours: 9,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    endTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Quarta',
                    enabled: true,
                    startTime: [
                        {
                            hours: 9,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    endTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Quinta',
                    enabled: true,
                    startTime: [
                        {
                            hours: 9,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    endTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Sexta',
                    enabled: true,
                    startTime: [
                        {
                            hours: 9,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    endTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Sábado',
                    enabled: true,
                    startTime: [
                        {
                            hours: 8,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Domingo',
                    enabled: false,
                },
            ]
        }
    },
}
</script>
<style scoped>
.v-row {
    justify-content: center;
}
</style>