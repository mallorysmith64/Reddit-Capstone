using System.Collections.Generic;
using System.Linq;
//reference databasecontext
using reddit_capstone;
using StackOverFlow.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
// using Microsoft.EntityFrameworkCore;
// using StackOverFlow.ViewModels;

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

    //update upvotes on quesions
    [HttpPatch("{id}/UpVote")]
    public ActionResult<Post> updateQuestionUpVote(int id)
    {
      var post = context.Posts.FirstOrDefault(q => q.ID == id);
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

    //update downvotes on questions
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

    // [HttpDelete("{id}")]
    // public ActionResult DeleteBlog(int id)
    // {
    //   var post = context.Posts.FirstOrDefault(f => f.ID == id);
    //   return Ok(new DeleteResponse { Post = post });
    // }

  }
}

