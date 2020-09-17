export default class Product {
    constructor(
        public id: String,
        public name: String,
        public description: String,
        public price: Number,
        public stock: Number,
        public thumbnail: String,
        public images: String[],
        public tags: String[]
        ) {}
}