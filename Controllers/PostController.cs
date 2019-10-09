using System.Collections.Generic;
using System.Linq;
//reference databasecontext
using reddit_capstone;
using StackOverFlow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace StackOverFlow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PostController : ControllerBase
  {
    //dependency injection
    private DatabaseContext context;

    public PostController(DatabaseContext _context)
    {
      this.context = _context;
    }
    //the only requests that should be [FromBody] is post and put, get and delete are NOT [FromBody]

    //post content
    [HttpPost]
    public async Task<ActionResult<Post>> CreateEntry([FromBody]Post entry)
    {
      //put await when adding and saving
      await context.Posts.AddAsync(entry);
      await context.SaveChangesAsync();
      return entry;
    }

    //post only one piece of content
    [HttpPost("{id}")]
    public async Task<ActionResult<Post>> PostOne([FromBody]Post entry)
    {
      //put await when adding and saving
      await context.Posts.AddAsync(entry);
      await context.SaveChangesAsync();
      return entry;
    }

    //get all posts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Post>>> GetAllPosts()
    {
      //do NOT need await when simply ordering posts
      var posts = context.Posts.OrderByDescending(post => post.TimePassed);
      //do need await when returning posts
      return await posts.ToListAsync();
    }

    //get one post
    [HttpGet("{id}")]
    public async Task<ActionResult> GetPost(int id)
    {
      var post = await context.Posts.FirstOrDefaultAsync(o => o.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(post);
      }
    }

    // //get search terms first
    // [HttpGet("search/{searchTerm}")]
    // //get a list of posts based off a string instead of a number/the id
    // public async Task<ActionResult<IEnumerable<Post>>> SearchPosts(string searchTerm)
    // {
    //   var results = context.Posts.Where(result => result.SearchTerm == searchTerm);
    //   return await results.ToListAsync();
    // }

    //post comments
    [HttpPost("{postId}/comments")]
    public ActionResult<Comment> CreateComment(int postId, [FromBody]Comment comment)
    {
      // check if the blog exists
      var post = context.Posts.FirstOrDefault(f => f.ID == postId);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        comment.PostID = postId;
        context.Comments.Add(comment);
        context.SaveChanges();
        return Ok();
      }
    }

    //update post
    [HttpPut("{id}")]
    public ActionResult<Post> Update(int id, [FromBody]Post newDetails)
    {
      if (id != newDetails.ID)
      {
        return BadRequest();
      }
      context.Posts.Update(newDetails);
      context.SaveChanges();
      return newDetails;
    }

    // get all votes before updating
    [HttpGet("{id}/Votes")]
    public async Task<ActionResult> GetUpVotes(int id)
    {
      var upvotes = await context.Posts.FirstOrDefaultAsync(u => u.ID == id);
      if (upvotes == null)
      {
        return NotFound();
      }
      else
      {
        return Ok(upvotes);
      }
    }

    //update upvotes on posts/questions
    [HttpPatch("{id}/UpVote")]
    public async Task<ActionResult<Post>> updateQuestionUpVote(int id)
    {
      var post = await context.Posts.FirstOrDefaultAsync(q => q.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        post.UpVote += 1;
        context.SaveChanges();
        return post;
      }
    }

    //update downvotes on posts/questions
    [HttpPatch("{id}/DownVote")]
    public ActionResult<Post> updateQuestionDownVote(int id)
    {
      var post = context.Posts.FirstOrDefault(q => q.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        post.DownVote += 1;
        context.SaveChanges();
        return post;
      }
    }

    //todo: update upvotes on comments
    // [HttpPatch("{ID}/Comment/{ID}/UpVote")]
    // public ActionResult<Comment> updateAnswerUpVote(int id)
    // {
    //   var comment = context.Comments.FirstOrDefault(a => a.ID == id);
    //   if (comment == null)
    //   {
    //     return NotFound();
    //   }
    //   else
    //   {
    //     comment.UpVote += 1;
    //     context.SaveChanges();
    //     return comment;
    //   }
    // }

    //delete posts
    [HttpDelete("{id}")]
    public ActionResult DeleteBlog(int id)
    {
      var post = context.Posts.FirstOrDefault(d => d.ID == id);
      if (post == null)
      {
        return NotFound();
      }
      else
      {
        context.Posts.Remove(post);
        context.SaveChanges();
        return Ok();
      }
    }
  }
}

