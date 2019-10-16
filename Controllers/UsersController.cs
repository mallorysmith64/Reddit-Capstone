using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reddit_Capstone.Models;
using reddit_capstone;
using Microsoft.AspNetCore.Identity;
using System;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

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

    // POST: api/Users
    // [HttpPost]
    // public async Task<ActionResult<User>> PostUsers(User users)
    // {
    //   _context.Users.Add(users);
    //   await _context.SaveChangesAsync();

    //   return CreatedAtAction("GetUsers", new { id = users.ID }, users);
    // }

    [HttpPost("register")]
    public ActionResult Register([FromBody] User userData)
    {
      // check if the user already exists
      var exists = _context.Users.Any(user => user.Email.ToLower() == userData.Email.ToLower());
      if (exists)
      {
        return BadRequest(new { Message = "User with the that email exists" });
      }
      else
      {
        // if is doesn't, create a new user
        var user = new User
        {
          Email = userData.Email
        };
        // hash the password
        var hashedPassword = new PasswordHasher<User>().HashPassword(user, userData.HashedPassword);
        // save the new user & hashedpassword
        user.HashedPassword = hashedPassword;
        _context.Users.Add(user);
        _context.SaveChanges();
        // create the token 
        // define its lifespan
        var expirationTime = DateTime.UtcNow.AddSeconds(259200);
        var payload = new SecurityTokenDescriptor
        {
          Subject = new ClaimsIdentity(new[]{
                new Claim(ClaimTypes.Name, user.Email),
                new Claim("id", user.ID.ToString())
            }),
          Expires = expirationTime,
          SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(Encoding.UTF8.GetBytes("NRW and ALG 4 life!")),
              SecurityAlgorithms.HmacSha256Signature
          )

        };
        var tokenGenerator = new JwtSecurityTokenHandler();
        var token = tokenGenerator.WriteToken(tokenGenerator.CreateToken(payload));

        // return the token
        return Ok();
      }
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
