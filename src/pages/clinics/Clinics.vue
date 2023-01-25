<template>
	<v-app>
		<NavigationBarVue />
		<v-main>
			<v-toolbar elevation="3">
				<v-toolbar-title>Clínicas
				</v-toolbar-title>
			</v-toolbar>

			<v-container>
				<v-card :class="clinic.status == 1 ? `clinics-list active-clinic` : `clinics-list inactive-clinic`"
					v-for="clinic in clinics" :key="clinic" @click="showClinicForm = true">
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

				<v-card>
					<ClinicForm v-if="showClinicForm" clinic="clinic" />
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import NavigationBarVue from '@/components/navbar/NavigationBar.vue';
import ClinicForm from './components/ClinicForm.vue';

export default {
	name: "PatientsPage",
	components: {
		NavigationBarVue,
		ClinicForm
	},
	created() {
		
	},
	methods: {

	},
	data: () => ({
		showClinicForm: false,
		clinics: [
			{
				name: "clinica 1",
				address: "rua joao cardoso, 25 - sp",
				status: 1,
				services: ["Periodontia", "Ortodontia", "Clínica geral", "Implante dentário", "Clareamento"]
			},
			{
				name: "clinica 2",
				address: "av. maria joao, 40 - boituva",
				status: 2,
				services: ["Clínica geral", "Implante dentário", "Clareamento"]
			},
			{
				name: "clinica 3",
				address: "rua jacó jacó, 122 - osasco",
				status: 1,
				services: ["Toxina botulínica", "Lentes", "Clínica geral", "Facetas"]
			},
		]
	}),
}
</script>
<style scoped>
.clinics-list {
	margin-bottom: 10px;
}

.inactive-clinic {
	border-left: solid 5px rgb(112, 106, 106);
}

.active-clinic {
	border-left: solid 5px rgb(30, 255, 0);
}
</style>