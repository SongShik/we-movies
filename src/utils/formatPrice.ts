export default function formatPrice(number: number){
    return number.toFixed(2).replace('.', ',');
}