module.exports = class DBService {
    #serverError = {
        data: null,
        message: `There is a problem on the server side, please contact support.`,
        statusCode: 500,
    };

    #ItemNotFoundMessage = {
        data: null,
        message: `Item not found`,
        statusCode: 404,
    };

    #atlas;
    constructor(atlasInterfaceInDB) {
        this.#atlas = atlasInterfaceInDB;
    }

    async create(table, data) {
        const {
            name,
            author,
            publishyear,
            price,
            abstract,
            tag,
            count,
            imagePath,
        } = data;
        try {
            const result = await this.#atlas
                .table(table).insert({
                    keys: [`name_${name}`, `author_${author}`, `tag_${tag}`],
                    body: {
                        name,
                        author,
                        publishyear,
                        price,
                        abstract,
                        tag,
                        count,
                        imagePath,
                    },
                });
            return { data: result, message: 'user succesfuly created', statusCode: 200 };
        } catch (error) {
            return this.#serverError;
        }
    }

    async readAll(table) {
        try {
            // const result = await this.#atlas.table(table).readAll(); // you should edit this line
            // return { data: result, message: null, statusCode: 200 }; // you should edit this line
        } catch (error) {
            return this.#serverError;
        }
    }

    async readById(table, id) {
        try {
            // const item = await this.#atlas.table(table).readById(id); // you should edit this line
            // if (item === null) {
            //     return this.#ItemNotFoundMessage;
            // }
            // return { data: item, message: null, statusCode: 200 }; // you should edit this line
        } catch (error) {
            return this.#serverError;
        }
    }

    async delete(table, id) {
        try {
            // const result = await this.#atlas.table(table).delete(id); // you should edit this line
            // return { data: result, message: null, statusCode: 200 }; // you should edit this line
        } catch (error) {
            return this.#serverError;
        }
    }

    //==========================================

    //   //-----------------------------

    //   async updatebook(params) {
    //     const data = params.data
    //     const defaultValue = await this.atlasInterface
    //       .select("keys", "body")
    //       .table("Book")
    //       .on("id")
    //       .where(params.params.id)
    //       .get();

    //     const lastBody = defaultValue.body.data.result[0].body;
    //     const lastKey = defaultValue.body.data.result[0].keys;

    //     const updatedKey = [
    //       data.name ? data.name : lastKey[0],
    //       data.author ? data.author : lastKey[1],
    //       data.tag ? data.tag : lastKey[2],
    //     ];
    //     const updatedBody = {
    //       name: data.name ? data.name : lastBody.name,
    //       author: data.author ? data.author : lastBody.author,
    //       publishyear: data.publishyear ? data.publishyear : lastBody.publishyear,
    //       price: data.price ? data.price : lastBody.price,
    //       abstract: data.abstract ? data.abstract : lastBody.abstract,
    //       tag: data.tag ? data.tag : lastBody.tag,
    //       count: data.count ? data.count : lastBody.count,
    //       imagePath: data.imagePath ? data.imagePath : lastBody.imagePath,
    //     };
    //     return await this.atlasInterface
    //       .table("Book")
    //       .on("id")
    //       .where(params.params.id)
    //       .update({
    //         keys: [
    //           `name_${updatedKey[0]}`,
    //           `author_${updatedKey[1]}`,
    //           `tag_${updatedKey[2]}`,
    //         ],
    //         body: {
    //           name: updatedBody.name,
    //           author: updatedBody.author,
    //           publishyear: updatedBody.publishyear,
    //           price: updatedBody.price,
    //           abstract: updatedBody.abstract,
    //           count: updatedBody.count,
    //           imagePath: updatedBody.imagePath,
    //         },
    //       });
    //     console.log(updatedKey, updatedBody);

    //   }

    //   //----------------------------------

    //   async getAllBook() {
    //     return await this.atlasInterface
    //       .table("Book")
    //       .select("id", "keys", "body")
    //       .startsWith("name")
    //       .get();
    //   }

    //   //--------------------------------

    //   async deleteBook(data) {
    //     return await this.atlasInterface
    //       .table("Book")
    //       .on("keys")
    //       .StartsWith(data.name)
    //       .delete();
    //   }
    //   //----------------------------------------------------

    //   async getBookById() {
    //     // const name = data.data.name
    //     return await this.atlasInterface
    //       .select('id')
    //       .where('name_The Ideal Team Player11')
    //       .startsWith(data.params)
    //       .delete();
    //   }

    //   //----------------------------------------------------
    //   async getaBook(id) {
    //     const idkeys = id.data.keys;
    //     const idvalue = id.data.value;
    //     return await this.atlasInterface
    //       .table("Book")
    //       .where(`${idkeys}${idvalue}`)
    //       .get();
    //   }
    //   //----------------------------------------
};
