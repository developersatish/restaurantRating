using Amazon.DynamoDBv2.DataModel;
using BackendServices.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendServices.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private readonly IDynamoDBContext _context;
        public RestaurantController(IDynamoDBContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var restaurant = await _context.LoadAsync<RestaurantModel>(id);
            if (restaurant == null) return NotFound();
            return Ok(restaurant);
        }
        [HttpGet]
        public async Task<IActionResult> GetAllRestaurants()
        {
            var restaurant = await _context.ScanAsync<RestaurantModel>(default).GetRemainingAsync();
            return Ok(restaurant);
        }
        [HttpPost]
        public async Task<IActionResult> CreateRestaurant(RestaurantModel restaurantModel)
        {
            var restaurant = await _context.LoadAsync<RestaurantModel>(restaurantModel.Id);
            if (restaurant != null) return BadRequest($"Restaurant with Id {restaurantModel.Id} Already Exists");
            await _context.SaveAsync(restaurantModel);
            return Ok(restaurantModel);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestaurant(int id)
        {
            var restaurant = await _context.LoadAsync<RestaurantModel>(id);
            if (restaurant == null) return NotFound();
            await _context.DeleteAsync(restaurant);
            return NoContent();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRestaurant(RestaurantModel restaurantModel)
        {
            var restaurant = await _context.LoadAsync<RestaurantModel>(restaurantModel.Id);
            if (restaurant == null) return NotFound();
            await _context.SaveAsync(restaurantModel);
            return Ok(restaurantModel);
        }
    }
}
