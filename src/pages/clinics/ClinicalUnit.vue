<template>
<GlobalToolbar buttonName="Nova unidade" :enableButton="enableButton" @onClick="showClinicOptions()" />
	
	<!-- <v-btn v-if="!this.dialog" class="fixed-btn elevation-3" icon color="secondary" @click="showClinicOptions()">
		<v-icon dark>mdi-plus</v-icon>
	</v-btn> -->

	<v-progress-linear v-show="loading" :indeterminate="true" absolute bottom color="primary"></v-progress-linear>

	<v-container v-if="!this.dialog && !loading">
		<v-card :class="clinic.status == 1 ? `clinicalUnits-list active-clinic` : `clinicalUnits-list inactive-clinic`"
			v-for="clinic in clinicalUnits" :key="clinic" @click="showClinicOptions(clinic)">
			<template v-slot:title>
				{{ clinic.name }}
			</template>

			<v-card-text>
				<v-card-subtitle>
					{{ clinic.address }}
				</v-card-subtitle>
			</v-card-text>
			<template v-slot:append>
				<v-chip-group>
					<v-chip v-for="service in clinic.services" :key="service">{{ service }}</v-chip>
				</v-chip-group>
			</template>
		</v-card>

	</v-container>


	<v-tabs v-if="this.dialog" v-model="tab" align-tabs="center">
		<v-tab v-for="item in items" :key="item" :value="item">
			{{ item }}
		</v-tab>
	</v-tabs>

	<v-divider v-if="this.dialog" />

	<v-window v-if="this.dialog" v-model="tab">


		<v-window-item value="dados principais">
			<ClinicForm :dialog="this.dialog" :selectedClinicalUnit="this.selectedClinicalUnit"
				@onCancel="onCancel" @onSave="updateComponents"/>
		</v-window-item>

		<v-window-item value="horário de funcionamento">
			<clinicalUnitschedule v-model:selectedClinicalUnitProp="this.selectedClinicalUnit"
				@setDefaultWorkDays="setDefaultWorkDays"  @onBack="updateComponents" @onCancel="onCancel" @onSave="onSave" />
		</v-window-item>

		<v-window-item value="funcionários">
			<ClinicalUnitEmployees />
		</v-window-item>

	</v-window>
</template>

<script>
import ClinicForm from './components/ClinicalUnitForm.vue';
import ClinicalUnitEmployees from './components/ClinicalUnitEmployees.vue';
import clinicalUnitschedule from './components/ClinicalUnitSchedule.vue';

export default {
	name: "ClinicalUnitPage",
	components: {
		ClinicForm,
		ClinicalUnitEmployees,
		clinicalUnitschedule
	},
	created() {
		this.getClinicalUnits();
	},
	computed: {
	},
	methods: {
		updateComponents(event) {
			//this.enableButton = true;
			//this.dialog = false;
			this.tab = event
		},
		onSave(event) {			
			if (!event.id) {
				this.clinicalUnits.push(event);
			}

			this.enableButton = true;
			this.dialog = false;
			//this.updateComponents();
		},
		onCancel(event) {
			this.clinicalUnits.map(clinic => {
				if (clinic.id == event.id) {
					Object.assign(clinic, event)
				}
			})
			
			this.enableButton = true;
			this.dialog = false;
			//this.updateComponents();
		},
		getClinicalUnits() {
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
				this.clinicalUnits = this.clinicalUnitsMock;
			}, 700);

		},
		setDefaultWorkDays(event) {
			this.selectedClinicalUnit.workDays = event;
		},
		showClinicOptions(clinicalId) {
			this.enableButton = false;
			this.selectedClinicalUnit = clinicalId;
			this.dialog = true;
			this.tab = 'dados principais';
		}
	},
	data: () => ({
		enableButton: true,
		loading: false,
		items: [
			'dados principais', 'horário de funcionamento', 'funcionários'
		],
		selectedClinicalUnit: {},
		dialog: false,
		tab: null,
		clinicalUnitsMock: [
			{
				id: 1,
				name: "unidade clinica 1",
				address: "rua joao cardoso, 25 - sp",
				status: true,
				services: ["Periodontia", "Ortodontia", "Clínica geral", "Implante dentário", "Clareamento"],
			},
			{
				id: 2,
				name: "unidade clinica 2",
				address: "av. maria joao, 40 - boituva",
				status: false,
				services: ["Clínica geral", "Implante dentário", "Clareamento"],
				workDays: [
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
						name: 'Terça'
					},
					{
						name: 'Quarta'
					},
					{
						name: 'Quinta'
					},
					{
						name: 'Sexta'
					},
					{
						name: 'Sábado'
					},
					{
						name: 'Domingo'
					},
				]
			},
			{
				id: 3,
				name: "unidade clinica 3",
				address: "rua jacó jacó, 122 - osasco",
				status: true,
				services: ["Toxina botulínica", "Lentes", "Clínica geral", "Facetas"],
			},
			{
				id: 4,
				name: "unidade clinica 4",
				address: "rua joao cardoso, 25 - sp",
				status: true,
				services: ["Periodontia", "Ortodontia", "Clínica geral", "Implante dentário", "Clareamento"],

			},
		]
	}),
}
</script>
<style scoped>
.fixed-btn {
	position: fixed;
	right: 10px;
	bottom: 10px;
	z-index: 999;
}

.clinicalUnits-list {
	margin-bottom: 10px;
}

.inactive-clinic {
	border-left: solid 5px rgb(112, 106, 106);
}

.active-clinic {
	border-left: solid 5px rgb(30, 255, 0);
}
</style>