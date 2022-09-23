module.exports = mongoose => {
    var schema = mongoose.Schema(
        //building a schema
        {
            title: String,
            description: String,
            published: Boolean
        },
        {timestamps: true}
    );

        //Attaching our schema to JSON
        schema.method("toJSON", function() {
            const { __v, _id, ...object } = this.toObject();
            object.id = _id;
            return object;
          });
          const Post = mongoose.model("post", schema)
            return Post;
        
}
