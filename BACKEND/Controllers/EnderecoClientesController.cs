using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartSystem.Data;
using SmartSystem.Models;
using static BACKEND.Dtos.EnderecoDto;

namespace SmartSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EnderecoClientesController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public EnderecoClientesController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

         [HttpPost]
        public async Task<ActionResult> AddAdress([FromBody] CreateEnderecoDto enderecoDto)
        {
            var endereco = new EnderecoClientesEntrega
            {
                ClienteId = enderecoDto.ClienteId,
                Nome = enderecoDto.Nome,
                Sobrenome = enderecoDto.Sobrenome,
                Pais = enderecoDto.Pais,
                CEP = enderecoDto.CEP,
                Endereco = enderecoDto.Endereco,
                Complemento = enderecoDto.Complemento,
                Cidade = enderecoDto.Cidade,
                Estado = enderecoDto.Estado,
                Telefone = enderecoDto.Telefone,
            };

            _appDbContext.EnderecoClientes.Add(endereco);
            await _appDbContext.SaveChangesAsync();

            return Ok(endereco);
        }


        [HttpGet]
        public async Task<ActionResult<List<EnderecoClientesEntrega>>> GetAllEnderecos()
        {
            var enderecos = await _appDbContext.EnderecoClientes.ToListAsync();
            return Ok(enderecos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EnderecoClientesEntrega>> GetEnderecoById(int id)
        {
            var endereco = await _appDbContext.EnderecoClientes.FindAsync(id);

            if (endereco == null)
            {
                return NotFound($"Endereço com ID {id} não encontrado.");
            }

            return Ok(endereco);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEndereco(int id, [FromBody] CreateEnderecoDto enderecoDto)
        {
            var endereco = await _appDbContext.EnderecoClientes.FindAsync(id);
            if (endereco == null)
            {
                return NotFound($"Endereço com ID {id} não encontrado.");
            }

            endereco.Nome = enderecoDto.Nome;
            endereco.Sobrenome = enderecoDto.Sobrenome;
            endereco.Pais = enderecoDto.Pais;
            endereco.CEP = enderecoDto.CEP;
            endereco.Endereco = enderecoDto.Endereco;
            endereco.Complemento = enderecoDto.Complemento;
            endereco.Cidade = enderecoDto.Cidade;
            endereco.Estado = enderecoDto.Estado;
            endereco.Telefone = enderecoDto.Telefone;
            
            await _appDbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEndereco(int id)
        {
            var endereco = await _appDbContext.EnderecoClientes.FindAsync(id);

            if (endereco == null)
            {
                return NotFound($"Endereço com ID {id} não encontrado.");
            }

            _appDbContext.EnderecoClientes.Remove(endereco);
            await _appDbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}