const app = Vue.createApp({
  data() {
    return {
      classTesting: "flex",
      products: [
        {
          thump:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8S0DAbtVBk6QHW0V_Go3TZQWBTJf3bc0yxe1xBIq-pYsQLzIrzsote0dWw7HIepEMrI&usqp=CAU",
          name: "Product A",
          price: 120,
          isCart: true,
        },
        {
          thump:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-sL5X13308Stfx0gTHKpNEFQSHc29NLvrHLcbYGe8WyNM5SP0AjtMY4cTwW-ktqJy2s&usqp=CAU",
          name: "Product B",
          price: 130,
          isCart: false,
        },
        {
          thump:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdF6J9ACbUluc97RoBTgi3wmGU5W2GClMVQFOiqHpdl3Pypf3w1X3FZa9AXzcXCXJiMts&usqp=CAU",
          name: "Product C",
          price: 170,
          isCart: true,
        },
      ],
    };
  },

  methods: {
    onToggleCart(event, product) {
      product.isCart = !product.isCart;
    },
  },

  computed: {
    productComputed() {
        return this.products.filter(product => product.price < 160)
    }
  }
});

app.mount("#contact");
