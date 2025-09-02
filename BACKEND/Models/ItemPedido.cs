namespace MercadoPagoAPI.Models
{
    public class ItemPedido
    {
        public required string Titulo { get; set; }
        public int Quantidade { get; set; }
        public decimal Preco { get; set; }
    }
}