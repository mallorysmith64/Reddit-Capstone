using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reddit_capstone;

namespace StackOverFlow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    //dependency injection
    private DatabaseContext context;

    public SearchController(DatabaseContext _context)
    {
      this.context = _context;
    }

    //get search terms first
    // [HttpGet("search/{searchTerm}")]
    //get a list of posts based off a string instead of a number/the id
    [HttpGet("posts")]
    public async Task<ActionResult> SearchPosts([FromQuery] string query)
    {
      query = query.ToLower();
      var results = await context.Posts.Where(post =>
      //convert strings toLower()
      post.PostedBy.ToLower().Contains(query) ||
      post.Title.ToLower().Contains(query) ||
      post.Content.ToLower().Contains(query) ||

      //dates should be toString()
      post.TimePassed.ToString().Contains(query)
      ).ToListAsync();
      return Ok(new { SearchingFor = query, results = results });
    }
  }
}