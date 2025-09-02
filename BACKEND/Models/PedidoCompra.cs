namespace MercadoPagoAPI.Models
{
    public class PedidoCompra
    {
        public List<ItemCompra> Itens { get; set; }
        public string EmailComprador { get; set; }

        // Adicione as propriedades do pagador para o PIX
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IdentificationType { get; set; }
        public string IdentificationNumber { get; set; }
        public AddressData Address { get; set; }
    }

    public class ItemCompra
    {
        public string Title { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }

    public class AddressData
    {
        public string ZipCode { get; set; }
        public string StreetName { get; set; }
        public int StreetNumber { get; set; }
    }
}