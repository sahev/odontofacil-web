<template>

	<v-btn v-if="!this.dialog" class="fixed-btn elevation-3" icon color="secondary" @click="showClinicForm()">
		<v-icon dark>mdi-plus</v-icon>
	</v-btn>

	<v-container v-if="!this.dialog">
		<v-card :class="clinic.status == 1 ? `clinicalUnits-list active-clinic` : `clinicalUnits-list inactive-clinic`"
			v-for="clinic in clinicalUnits" :key="clinic" @click="showClinicForm(clinic)">
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
	<v-window v-if="this.dialog" v-model="tab">


		<v-window-item value="dados principais">
			<ClinicForm :dialog="this.dialog" :selectedClinicalUnit="this.selectedClinicalUnit"
				@updateDialog="dialog = $event" />
		</v-window-item>

		<v-window-item value="horário de funcionamento">
			<clinicalUnitschedule :selectedClinicalUnit="this.selectedClinicalUnit" @updateDialog="dialog = $event" @setDefaultWorkDays="setDefaultWorkDays($event)"/>
		</v-window-item>

		<v-window-item value="doutores">
			<ClinicEmployes />
		</v-window-item>

	</v-window>

</template>

<script>
import ClinicForm from './components/ClinicalUnitForm.vue';
import ClinicEmployes from './components/ClinicalUnitEmployes.vue';
import clinicalUnitschedule from './components/ClinicalUnitSchedule.vue';

export default {
	name: "ClinicalUnitPage",
	components: {
		ClinicForm,
		ClinicEmployes,
		clinicalUnitschedule
	},
	created() {

	},
	methods: {
		setDefaultWorkDays(event) {
			console.log(event, 'evento atualizuação');
			this.selectedClinicalUnit = event;
		},	
		showClinicForm(clinicalId) {
			this.selectedClinicalUnit = clinicalId;
			this.dialog = true;
			this.tab = 'dados principais';
		}
	},	
	data: () => ({
		items: [
			'dados principais', 'horário de funcionamento', 'doutores'
		],
		selectedClinicalUnit: {},
		dialog: false,
		tab: null,
		clinicalUnits: [
			{
				id: 1,
				name: "unidade clinica 1",
				address: "rua joao cardoso, 25 - sp",
				status: true,
				services: ["Periodontia", "Ortodontia", "Clínica geral", "Implante dentário", "Clareamento"],
				workDays: [
					{
						name: 'Segunda',
						period: ['Tarde']
					},
					{
						name: 'Terça',
						period: []
					},
					{
						name: 'Quarta',
						period: []
					},
					{
						name: 'Quinta',
						period: ['Noite']
					},
					{
						name: 'Sexta',
						period: ['Noite']
					},
					{
						name: 'Sábado',
						period: ['Noite']
					},
					{
						name: 'Domingo',
						period: ['Noite']
					},
				]
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
						period: ['Tarde']
					},
					{
						name: 'Terça',
						period: []
					},
					{
						name: 'Quarta',
						period: []
					},
					{
						name: 'Quinta',
						period: ['Noite']
					},
					{
						name: 'Sexta',
						period: []
					},
					{
						name: 'Sábado',
						period: []
					},
					{
						name: 'Domingo',
						period: []
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
				workDays: [
					{
						name: 'Segunda',
						period: ['Tarde']
					},
					{
						name: 'Terça',
						period: ['Tarde', 'Noite']
					},
					{
						name: 'Quarta',
						period: []
					},
					{
						name: 'Quinta',
						period: ['Noite']
					},
					{
						name: 'Sexta',
						period: []
					},
					{
						name: 'Sábado',
						period: []
					},
					{
						name: 'Domingo',
						period: []
					},
				]
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