// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using reddit_capstone;
// using Reddit_Capstone.Models;

// namespace Reddit_Capstone.Controllers
// {
//   [Route("api/[controller]")]
//   [ApiController]
//   public class UserController : ControllerBase
//   {
//     //dependency injection
//     private DatabaseContext context;

//     public UserController(DatabaseContext _context)
//     {
//       this.context = _context;
//     }

//     // GET: api/Users
//     [HttpGet]
//     public async Task<ActionResult<IEnumerable<User>>> GetUsers()
//     {
//       return await context.Users.ToListAsync();
//     }

//     // GET: api/Users/5
//     [HttpGet("{id}")]
//     public async Task<ActionResult<User>> GetUsers(int id)
//     {
//       var users = await context.Users.FindAsync(id);

//       if (users == null)
//       {
//         return NotFound();
//       }

//       return users;
//     }

//     // PUT: api/Users/5
//     [HttpPut("{id}")]
//     public async Task<IActionResult> PutUsers(int id, User users)
//     {
//       if (id != users.ID)
//       {
//         return BadRequest();
//       }

//       context.Entry(users).State = EntityState.Modified;

//       try
//       {
//         await context.SaveChangesAsync();
//       }
//       catch (DbUpdateConcurrencyException)
//       {
//         if (!UsersExists(id))
//         {
//           return NotFound();
//         }
//         else
//         {
//           throw;
//         }
//       }

//       return NoContent();
//     }

//     [HttpGet("check")]
//     public async Task<ActionResult> CheckIfUserExists()
//     {

//       var userId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
//       var exists = await context.Users.AnyAsync(a => a.UserName == userId);

//       return Ok(new { exists });
//     }

//     // POST: api/Users
//     [HttpPost]
//     public async Task<ActionResult<User>> PostUsers()
//     {
//       var userId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
//       var user = new User
//       {
//         UserName = userId
//       };
//       context.Users.Add(user);
//       await context.SaveChangesAsync();

//       return user;
//     }

//     // DELETE: api/Users/5
//     [HttpDelete("{id}")]
//     public async Task<ActionResult<User>> DeleteUsers(int id)
//     {
//       var users = await context.Users.FindAsync(id);
//       if (users == null)
//       {
//         return NotFound();
//       }

//       context.Users.Remove(users);
//       await context.SaveChangesAsync();

//       return users;
//     }

//     private bool UsersExists(int id)
//     {
//       return context.Users.Any(e => e.ID == id);
//     }
//   }
// }