<template>

	<v-card>
		<v-card-text>
			<v-container>
				<v-row>
					<v-col cols="12" sm="6">
						<v-text-field v-model="form.name" label="Nome da clínica*" required></v-text-field>
					</v-col>
					<v-col cols="12" sm="6">
						<v-text-field v-model="form.address" label="Endereço" hint="endereço da clínica"></v-text-field>
					</v-col>

					<v-col cols="12" sm="6" md="4">
						<v-text-field v-model="form.CNPJ" label="CNPJ"
							hint="número de identificação da clínica"></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<v-text-field v-model="form.phone" label="Telefone*" hint="telefone do responsável"
							required></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<v-text-field v-model="form.email" label="Email*" hint="email do responsável"
							required></v-text-field>
					</v-col>
					<v-col cols="12" sm="6" md="4">
						<v-autocomplete v-model="form.services" :items="serviceTypes" label="Tipos de serviço"
							multiple></v-autocomplete>
					</v-col>
					<v-col cols="12" md="12">
						<v-textarea v-model="form.observation" label="Observações"></v-textarea>
					</v-col>
					<v-col cols="12" md="1">
						<v-switch v-model="form.status" label="status" color="success" hide-details></v-switch>
					</v-col>


				</v-row>
			</v-container>
			<small>*campos obrigatórios</small>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn color="error" variant="outlined" @click="cancelForm">
				cancelar
			</v-btn>
			<v-btn color="success" variant="tonal" @click="onSave">
				salvar
			</v-btn>
		</v-card-actions>


	</v-card>
</template>
<script>
import { onMounted, ref } from 'vue'
// import postsService from 'src/services/posts'

// const { post, getById, update } = postsService()

export default {
	name: 'ClinicForm',
	emits: ['updateDialog'],
	props: {
		dialog: { type: Boolean, default: false },
		selectedClinicalUnit: { type: Object, default: Object },
	},
	setup(props, { emit }) {
		const form = ref({
			name: "",
			address: "",
			status: false,
			services: []
		})

		const initialValue = { ...props.selectedClinicalUnit };

		onMounted(async () => {
			form.value = props.selectedClinicalUnit;
		})

		const onCancel = () => {
			emit('updateDialog', false);

		}

		const onSave = () => {
			console.log('save new clinical unit', form.value);
			emit('updateDialog', false);
		}

		const cancelForm = () => {
			form.value = initialValue;
			console.log('cancel = emitir evento pro componente pai e chamar metodo de atualização de pagina', form.value, initialValue);
			emit('updateDialog', false);
		}

		return {
			form,
			onCancel,
			onSave,
			cancelForm
		}
	},
	data: () => ({
		tab: null,
		serviceTypes: [
			"Dentística",
			"Implantodontia",
			"Ortodontia",
			"Endodontia",
			"Periodontia",
			"Odontopediatria",
		]
	}),
}
</script>