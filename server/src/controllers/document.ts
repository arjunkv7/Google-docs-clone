import Doc from '../models/document';

export let updateOrInsertDocument = async (documentId: string, data: object) => {
    if (documentId == null || documentId == '') return;
    console.log(data, documentId)

    let document = await Doc.findOneAndUpdate({ documentId }, { data });
    if (document == null) {
        document = await Doc.create({ documentId });
    }

    return document;
}

export let getDocument = async (documentId: string) => {
    if (documentId == null || documentId == '') return '';

    return await Doc.findOne({ documentId }).select({ data: 1, _id: 0 })
}