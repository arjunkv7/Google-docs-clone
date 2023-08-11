import { UserModel } from '../models/index';

export let updateOrInsertDocument = async (documentId: string, data: object) => {
    if (documentId == null || documentId == '') return;
    console.log(data, documentId)

    let document = await UserModel.findOneAndUpdate({ documentId }, { data });
    if (document == null) {
        document = await UserModel.create({ documentId });
    }

    return document;
}

export let getDocument = async (documentId: string) => {
    if (documentId == null || documentId == '') return '';

    return await UserModel.findOne({ documentId }).select({ data: 1, _id: 0 })
}