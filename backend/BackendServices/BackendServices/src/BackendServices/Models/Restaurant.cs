using Amazon.DynamoDBv2.DataModel;

namespace BackendServices.Models
{

    public class RatingModel
    {
        [DynamoDBProperty("rating")]
        public int Rating { get; set; } = 0;

        [DynamoDBProperty("text")]
        public string Text { get; set; } = string.Empty;

        [DynamoDBProperty("date")]
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }

    [DynamoDBTable("RestaurantTable")]
    public class RestaurantModel
    {
        [DynamoDBHashKey("id")]
        public int Id { get; set; }

        [DynamoDBProperty("name")]
        public string Name { get; set; } = string.Empty;

        [DynamoDBProperty("address")]
        public string Address { get; set; } = string.Empty;

        [DynamoDBProperty("description")]
        public string Description { get; set; } = string.Empty;

        [DynamoDBProperty("hours")]
        public string Hours { get; set; } = string.Empty;

        [DynamoDBProperty("averageRatings")]
        public List<RatingModel> AverageRatings { get; set; } = new List<RatingModel>();
    }
}
