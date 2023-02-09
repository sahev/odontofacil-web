<template>
    <GlobalToolbar :enableSearch="true" @onSearch="searchValue"></GlobalToolbar>
    <v-btn class="fixed-btn elevation-3" icon color="primary" @click="isCreate">
        <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-data-table :search="search" :headers="headers" :items="employees" :sort-by="[{ key: 'calories', order: 'asc' }]"
        class="elevation-1">

        <template v-slot:top>
            
            <v-divider class="mx-4" inset vertical></v-divider>

            <v-spacer></v-spacer>


            <v-dialog v-model="dialog" max-width="500px">

                <v-card>
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.function" label="Função"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="close">
                            Cancel
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="save">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>
<script>
export default {
    name: "EmployeesPage",
    data: () => ({
        search: "",
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                title: "Nome",
                align: "start",
                sortable: false,
                key: "name",
            },
            { title: "Username", key: "username" },
            { title: "E-mail", key: "email" },
            { title: "Telefone", key: "phone" },
            { title: "Função", key: "function" },
            { title: "Actions", key: "actions", sortable: false },
        ],
        employees: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
        defaultItem: {
            name: "",
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        isCreate() {
            this.dialog = true;
        },
        searchValue(event) {
            this.search = event;
        },  
        initialize() {
            this.employees = [
                {
                    name: "administrador",
                    email: "adm@a.a",
                    username: "adm",
                    phone: "1191234-1234",
                    function: "Administrator",
                    role: "Administrator",
                },
                {
                    name: "assistant",
                    email: "assistant@a.a",
                    username: "assistant",
                    phone: "1196545-5647",
                    function: "Assistente",
                    role: "Doutor",
                },
                {
                    name: "doutor",
                    email: "doc@a.a",
                    username: "doctor",
                    phone: "1111111-9999",
                    function: "Doutor",
                    role: "Doctor",
                },
            ];
        },
        editItem(item) {
            this.editedIndex = this.employees.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            this.editedIndex = this.employees.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.employees.splice(this.editedIndex, 1);
            this.closeDelete();
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.employees[this.editedIndex], this.editedItem);
            }
            else {
                this.employees.push(this.editedItem);
            }
            this.close();
        },
    }
}
</script>
<style scoped>
.fixed-btn {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 999;
}
</style>