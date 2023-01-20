<template lang="">
    <div class="d-flex">
        <div class="card" style="width: 10rem;">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{newCat.title}}</h5>
                <p class="card-text">{{newCat.msg}}</p>
            </div>
        </div>
        <div class="new-cat" style="width: 10rem;">
            <div class="d-flex">
                <div class="d-flex" v-for="cat in listOfCats">
                    <div class="card">
                        <img class="card-img-top" src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="Card image cap">
                        <h5 class="card-title">{{ cat.title }}</h5>
                        <p class="card-text">{{ cat.msg }}</p>
                    </div>
                </div>
            </div>
            
            <div class="newCat">
                <h3>Aggiungi un'account</h3>
                <div>Inserisci il tuo nome<input type="text" v-model="newCat.title"></div>
                <div>Inserisci il tuo cognome<input type="text" v-model="newCat.msg"></div>
                <button type="submit" @click="addNewCat()">Aggiungi Account</button>
                <button type="reset" @click="resetCat()">Rimuovi Account</button>
                <cat-card :cat="newCat" />
            </div>
        </div>
    </div>
    </template>
<script>
export default {
    data: function () {
        return {
            newCat: {
                title: "",
                msg: "",
                link: "",
                visible: true,
            },

        }
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
        },
        addCat: function (theNewCat) {
            this.listOfCats.unshift(theNewCat);
        }
    }
}
</script>
<style lang="scss" scoped>
.newCat {
    width: 300px;
    border: 1px solid white;
    padding: 10px;
}
</style>