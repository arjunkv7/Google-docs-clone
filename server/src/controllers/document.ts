import { DocumentModel  } from '../models/index';

export let updateOrInsertDocument = async (documentId: string, data: object) => {
    if (documentId == null || documentId == '') return;
    console.log(data, documentId)

    let document = await DocumentModel.findOneAndUpdate({ documentId }, { data });
    if (document == null) {
        document = await DocumentModel.create({ documentId });
    }

    return document;
}

export let getDocument = async (documentId: string) => {
    if (documentId == null || documentId == '') return '';

    return await DocumentModel.findOne({ documentId }).select({ data: 1, _id: 0 })
}