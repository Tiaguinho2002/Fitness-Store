using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BACKEND.Dtos
{
    public class EnderecoDto
    {
        public class CreateEnderecoDto
{
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
    }
}