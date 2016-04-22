import React from 'react'

const Documents = React.createClass({
  render () {
    return (
      <div class='container'>
        <table class='table is-striped is-narrow'>
          <thead>
            <tr>
              <th><strong>A Guide To Electronic Bow & Social Impact Making</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href='https://github.com/MindMakersProject/website-BE/raw/master/documents/mm_girlscouts_lr_v7.pdf'>
                  Girl Scouts
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='https://github.com/MindMakersProject/website-BE/raw/master/documents/GSPresentationNoVid.pdf'>
                  Javabots Workshop
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

export default Documents
