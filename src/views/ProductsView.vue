<template>
    <div>
        <ProductsComp>
       
            <div class="row">
                <div class="col">
                    <h2 class="display-2">Our Listings</h2>
                </div>
            </div>
            <div class="row filter ">
                <div class="col">
                    <div class="row">
                        <div class="col-md-4 col-sm">
                            <div class="row m-2">
                                <label for="filter-type">Home type</label>
                            </div>
                            <div class="row m-2 ">
                                <select name="filter-type" id="filter-type">
                                    <option value="" disabled selected></option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                  
                                </select>
                            </div>
                            
                        </div>
                        
                        <div class="col-md-4 col-sm">
                            <div class="row m-2">
                                <label for="fliter-price">Price</label>
                            </div>
                            <div class="row m-2">
                                <select name="fliter-price" id="fliter-price" style="min-width: 100%;">
                                    <option value="" disabled selected></option>
                                    <option value="400k-599k">R400 000- R599 000</option>
                                    <option value="600k-799k">R600 000- R799 000</option>
                                    <option value="800k-1mil">R800 000- R1 000 000</option>
                                    <option value="1.1mil-4.9mil">R1 100 000- R4 900 000</option>
                                    <option value="5mil-9.9mil">R5 000 000- R9 900 000</option>
                                    <option value="10mil-14.9mil">R10 000 000- R14 900 000</option>
                                    <option value="15mil-19.9mil">R15 000 000-R19 900 000</option>
                                    <option value="20mil-24.9mil">R20 000 000- R24 900 000</option>
                                    <option value="25mil-29.9mil">R25 000 000- R29 900 000</option>
                                    <option value="30mil+">R30 000 000 +</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-md-2 mt-4" >
                    <button id="filter-btn">Filter</button>
                </div>
                <div class="col-12 col-md-2 mt-4" >
                   <ContactCompVue/>
                </div>
                
    
            </div>
            
        </ProductsComp>
    </div>
</template>

<script>
import ProductsComp from '@/components/ProductsComp.vue';
import ContactCompVue from '@/components/ContactComp.vue';

    export default {
        components:{
            ProductsComp,
            ContactCompVue
            
        }
        
    }
</script>

<style scoped>

</style>