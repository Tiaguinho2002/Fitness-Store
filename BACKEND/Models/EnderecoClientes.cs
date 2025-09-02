using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class EnderecoClientesEntrega
{
    // A CHAVE PRIMÁRIA DA TABELA DE ENDEREÇOS.
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    // Chave estrangeira para o cliente.
    [JsonPropertyName("clienteId")]
    public int ClienteId { get; set; }

    [JsonPropertyName("firstName")]
    public string Nome { get; set; }

    [JsonPropertyName("lastName")]
    public string Sobrenome { get; set; }

    [JsonPropertyName("country")]
    public string Pais { get; set; }

    [JsonPropertyName("postalCode")]
    public string CEP { get; set; }

    [JsonPropertyName("address")]
    public string Endereco { get; set; }

    [JsonPropertyName("complement")]
    public string Complemento { get; set; }

    [JsonPropertyName("city")]
    public string Cidade { get; set; }

    [JsonPropertyName("state")]
    public string Estado { get; set; }

    [JsonPropertyName("phone")]
    public string Telefone { get; set; }
}



