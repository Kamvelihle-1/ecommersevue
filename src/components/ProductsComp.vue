<template>
    <div>
       <slot>

       </slot>
       <div class="row mb-2">
        <div  class="col properties d-flex gap-2 mt-3 flex-wrap text-center" v-for="prod in products" :key="prod.id">
            <div class="card prod-card" style="max-width: 18rem;">
                <img :src="prod.image" class="card-img-top" alt="property-image" style="height:190px;">
                <div class="card-body">
                    <h5 class="card-title">{{ prod.location }}</h5>
                    <p class="card-text">A beutiful {{ prod.rooms }} room {{ prod.type }}</p>
                    <p>R {{ prod.price }}</p>
                    <button id="btn-MinusQuantity"><i class="fa-solid fa-minus"></i></button>
                    <button class="mx-3" id="btn-AddQuantity"><i class="fa-solid fa-plus"></i></button>
                    <button id="btn-wishlist"><i class="fa-solid fa-bookmark"></i></button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

    export default {
       
        
        computed: {
            products(){
                return this.$store.state.prods
            }
        }
        
    }
</script>

<style scoped>
.filter{
    background-color: aliceblue; 
}
#btn-wishlist{
    padding: 5px;
}

#btn-wishlist:hover::after {
    content: "Add to wish-list"; 
    position: absolute;
    top: 70%; 
    left: 75%; 
    transform: translateX(-50%);
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0.8;
    white-space: nowrap; 
  }

</style>