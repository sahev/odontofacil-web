<template>
    <v-row>
        <v-col cols="10" class="text-center">
            <v-container>
                <v-card>
                    <v-table>
                        <thead>
                            <tr>
                                <th>
                                    <v-card-subtitle>Período</v-card-subtitle>
                                </th>
                                <th v-for="day in (this.selectedClinicalUnit.workDays ?? defaultWorkDays) "
                                    :key="day.name">
                                    {{ day.name }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="period in periods" :key="period">
                                <td>{{ period.name }}

                                </td>
                                <td v-for="day in (this.selectedClinicalUnit.workDays ?? defaultWorkDays)"
                                    :key="day.name">
                                    <v-checkbox v-model="day.period" :value="period.name">
                                    </v-checkbox>


                                </td>
                            </tr>
                        </tbody>

                    </v-table>

                </v-card>

            </v-container>

            <v-divider></v-divider>

            <v-container>
                <v-card>
                    <v-table>
                        <thead>
                            <tr>
                                <th  class="text-center">
                                    <v-card-subtitle>Dias da semana</v-card-subtitle>
                                </th>
                                <th class="text-center">
                                    Manhã
                                </th>
                                <th class="text-center">
                                    Tarde
                                </th>
                                <th class="text-center">
                                    Noite
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="day in (this.selectedClinicalUnit.workDays ?? defaultWorkDays)" :key="day.name">
                                <td>
                                    {{ day.name }}
                                </td>
                                <td>
                                    <Datepicker v-model="day.morningTime" time-picker range placeholder="Selecione o horário" />
                                </td>
                                <td>
                                    <Datepicker v-model="day.afternoonTime" time-picker range placeholder="Selecione o horário" />
                                </td>
                                <td>
                                    <Datepicker v-model="day.nightTime" time-picker range placeholder="Selecione o horário" />
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-container>
            
            <v-container>
                <v-card>
                <div class="d-flex flex-row mb-6 ">
                    
                    <v-card-subtitle class="text-left">Propriedades adicionais</v-card-subtitle>
                    <v-checkbox label="Incluir horário de almoço?" v-model="lunchTimeField" color="primary">
                    </v-checkbox>
                    <v-checkbox label="Incluir dia de folga nos feriados?" v-model="lunchTimeField" color="primary">
                    </v-checkbox>
                </div>
                   
                </v-card>
            </v-container>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" variant="outlined" @click="setDefaultSchedule">
                    definir calendário padrão
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
    emits: ['updateDialog', 'setDefaultWorkDays'],
    props: {
        selectedClinicalUnitProp: { type: Object, default: Object },
    },
    methods: {
        setDefaultSchedule() {
            this.$emit('setDefaultWorkDays', this.defaultWorkDays);
        },
        onCancel() {
            this.$emit('updateDialog', false);

        },
        onSave() {
            console.log('update workdays', this.selectedClinicalUnit.workDays, this.selectedClinicalUnit.id);
            this.$emit('updateDialog', false);
        }
    },
	computed: {
		
		selectedClinicalUnit() {
            console.log('atualizado');
			return this.selectedClinicalUnitProp;
		}
	},
    data() {
        return {
            lunchTimeField: false,
            periods: [
                {
                    name: 'Manhã',
                },
                {
                    name: 'Tarde',
                },
                {
                    name: 'Noite',
                },
            ],
            defaultWorkDays: [
                {
                    name: 'Segunda',
                    periods: ['Manhã', 'Tarde', 'Noite'],
                    morningTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    afternoonTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                    nightTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 22,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Terça',
                    periods: ['Manhã', 'Tarde', 'Noite'],
                    morningTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    afternoonTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                    nightTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 22,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Quarta',
                    period: ['Manhã', 'Tarde', 'Noite'],
                    morningTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    afternoonTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                    nightTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 22,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Quinta',
                    period: ['Manhã', 'Tarde', 'Noite'],
                    morningTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    afternoonTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                    nightTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 22,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Sexta',
                    period: ['Manhã', 'Tarde', 'Noite'],
                    morningTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 12,
                            minutes: 0
                        }
                    ],
                    afternoonTime: [
                        {
                            hours: 13,
                            minutes: 0
                        },
                        {
                            hours: 18,
                            minutes: 0
                        }
                    ],
                    nightTime: [
                        {
                            hours: 6,
                            minutes: 0
                        },
                        {
                            hours: 22,
                            minutes: 0
                        }
                    ],
                },
                {
                    name: 'Sábado',
                    period: ['Manhã'],
                    morningTime: [
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
                    period: ['Manhã'],
                    morningTime: [
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