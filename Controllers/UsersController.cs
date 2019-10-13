using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reddit_Capstone.Models;
using reddit_capstone;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public UsersController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
      return await _context.Users.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUsers(int id)
    {
      var users = await _context.Users.FindAsync(id);

      if (users == null)
      {
        return NotFound();
      }

      return users;
    }

    // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUsers(int id, User users)
    {
      if (id != users.ID)
      {
        return BadRequest();
      }

      _context.Entry(users).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UsersExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // [HttpGet("check")]
    // public async Task<ActionResult> CheckIfUserExists()
    // {

    //   var token = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
    //   var exists = await _context.Users.AnyAsync(a => a.AccessToken == token);

    //   return Ok(new { exists });
    // }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<User>> PostUsers(User users)
    {
      _context.Users.Add(users);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetUsers", new { id = users.ID }, users);
    }

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<User>> DeleteUsers(int id)
    {
      var users = await _context.Users.FindAsync(id);
      if (users == null)
      {
        return NotFound();
      }

      _context.Users.Remove(users);
      await _context.SaveChangesAsync();

      return users;
    }

    private bool UsersExists(int id)
    {
      return _context.Users.Any(e => e.ID == id);
    }
  }
}
