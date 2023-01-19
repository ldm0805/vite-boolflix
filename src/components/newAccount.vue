<script>
export default {
    data: function () {
        return {
            newCat: {
                title: "",
                msg: "",
                link: "",
                visible: true
            },
            methods: {
                addNewCat: function () {
                    this.$emit('create-new-cat', this.newCat);
                    this.resetCat();
                },
                resetCat: function () {
                    this.newCat = {
                        title: "",
                        msg: "",
                        link: "",
                        visible: true

                    }
                }
            }
        }
    }
}
</script>
<template lang="">
    <div class="d-flex flex-column">

        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{newCat.title}}</h5>
                <p class="card-text">{{newCat.msg}}</p>
            </div>
        </div>
        <div class="new-cat text-white">
            <h3>Aggiungi un'account</h3>
            <div>Inserisci il tuo nome<input type="text" v-model="newCat.title"></div>
            <div>Inserisci il tuo cognome<input type="text" v-model="newCat.msg"></div>
            <button type="submit" @click="addNewCat()">add cat</button>
            <button type="reset" @click="resetCat()">remove</button>
            <!-- <cat-card :cat="newCat" /> -->
        </div>
    </div>
    </template>
<style lang="scss" scoped>
.newCat {
    width: 300px;
    border: 1px solid white;
    padding: 10px;
}
</style>