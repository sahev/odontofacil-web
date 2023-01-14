<template>
    <v-card height="85">
        <div class="item-box">
            <v-list-item :subtitle="text">
            <a class="text-h6 font-weight-thin">{{counter}}</a>
                <template v-slot:prepend>
                    <v-avatar color="secondary">
                        <v-icon>
                            {{ icon }}
                        </v-icon>
                    </v-avatar>
                </template>
            </v-list-item>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "ItemBoard",
    props: {
        counter: String,
        text: String,
        icon: String,
    },
    data: () => ({

    }),
}
</script>
<style scoped>
.item-box {
    margin-top: 15px;
    display: flex;
}
</style>