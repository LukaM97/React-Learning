using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using React_Exercise.Models;
using React_Exercise.Models.DTO;

namespace React_Exercise.Repository.Interfaces
{
    public interface IAgencijaRepository
    {
        IQueryable<Agencija> GetAll();
        Agencija GetOne(int id);

        IEnumerable<AgencijaSumaDTO> GetSumbyGranica(int granica);
        IEnumerable<AgencijaBrojOglasaDTO> GetBrojnost();
        IQueryable<Agencija> GetByNaziv(string naziv);
    }
}
