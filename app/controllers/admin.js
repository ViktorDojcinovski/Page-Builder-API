const Page = require('../models/page');

exports.getAddPage = (req, res, next) => {
    console.log('Inside getAddPage controller action method!!!')
    res.render('admin/edit-product', {
        pageTitle: 'Add Page',
        path: '/admin/add-page',
        editing: false
    });
};

exports.postAddPage = (req, res, next) => {
    const name = req.body.name;
    const user_id = req.body.user_id;
    const page_content = req.body.page_content;
    const page = new Page({
        name: name,
        user_id: user_id,
        page_content: page_content
    });
    page
        .save()
        .then(result => {
        // console.log(result);
        console.log('Created Page');
        res.redirect('/admin/pages');
        })
        .catch(err => {
        console.log(err);
        });
};

exports.getEditPage = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const pageId = req.params.pageId;
    Page.findById(pageId)
        .then(page => {
        if (!page) {
            return res.redirect('/');
        }
        res.render('admin/edit-page', {
            pageTitle: 'Edit Page',
            path: '/admin/edit-page',
            editing: editMode,
            page: page
        });
        })
        .catch(err => console.log(err));
};

exports.postEditPage = (req, res, next) => {
    const pageId = req.body.pageId;
    const updatedName = req.body.name;
    const updatedContent = req.body.page_content;

    Page.findById(pageId)
        .then(page => {
        page.name = updatedName;
        page.page_content = updatedContent;
        return page.save();
        })
        .then(result => {
        console.log('UPDATED PAGE!');
        res.redirect('/admin/pages');
        })
        .catch(err => console.log(err));
};

exports.getPages = (req, res, next) => {
    Page.find()
        .then(pages => {
        console.log(pages);
        res.render('admin/pages', {
            pages: pages,
            pageTitle: 'Admin Pages',
            path: '/admin/pages'
        });
        })
        .catch(err => console.log(err));
};

exports.postDeletePage = (req, res, next) => {
    const pageId = req.body.pageId;
    Page.findByIdAndRemove(pageId)
        .then(() => {
        console.log('DESTROYED PAGE');
        res.redirect('/admin/page');
        })
        .catch(err => console.log(err));
};
