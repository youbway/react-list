import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import monent from 'moment';
import './index.css';
import PropTypes from 'prop-types';
import moment from 'moment';


const articles = [
    {
        id : 0 ,
        rank  : 1,
        articleTitle : "Why I'm suing the US Government",
        articleSource : "Bunniestudios.com",
        points : 1346 ,
        author : "ivank",
        time : "2016-07-30 21:24:37",
        comments : 1275,
    },
    {
        id : 1 ,
        rank  : 2,
        articleTitle : "Why I'm suing the US Government",
        articleSource : "Bunniestudios.com",
        points : 1346 ,
        author : "ivank",
        time : "2016-07-30 21:24:37",
        comments : 1275,
    }
]

function ArticlesList({articles}) {
    return (
        <div className="articles-list">
        {
            articles.map(articleItem => (
                <ArticleItem key={articleItem.id} article={articleItem} ></ArticleItem>
            ))
        }
    </div>
    )
}
    


function ArticleItem({article}) {
    return (
        <div className='article-item'>
            <Rank rank={article.rank}></Rank>
            <Article title={article.articleTitle} source={article.articleSource}></Article>
            <ArticleInfo points={article.points} author={article.author} time={article.time} comments={article.comments}></ArticleInfo>
        </div>
    )
}


const Rank = ({rank}) => (
    <div className="rank">
        <span>{rank} </span>
        <span>.</span>
        <span><i className="fa fa-arrow-up"></i></span>
    </div>
)

const Article = ({title , source}) => (
    <div className="article">
        <span className='article-title '>{title} </span>
        <span className="article-source">({source}) </span>
    </div>
)

const ArticleInfo = ({points, author, time, comments}) => {
    const timeString = moment(time).fromNow();
    return (
    <Info>
        <PointsNAuthor >{points} points by {author} {timeString} </PointsNAuthor>
        <span className='flag'><a href="/">flag</a></span>
        <span className=""><a href="/">hide</a></span>
        <Comments comments={comments}></Comments>
        <span><a href="/">instapaper</a></span>
        <span><a href="/">save to pocket</a></span>
    </Info>
    )
}

const Info = ({children}) =>  {
    let items = React.Children.toArray(children);
    for ( let i = items.length - 1; i >= 1; i -- ) {
        items.splice(i, 0,
        <span key={i} className='separator' > | </span>
        );
    }
    return (
        <div className="info">{items} </div>
    )
}

const PointsNAuthor = ({children}) => {
    return (
        <span><a href="/">{children}</a> </span>
    )
}
const Comments = ({comments})=> (
    <span><a href="/">{comments} comments</a> </span>
)

ReactDOM.render(<ArticlesList articles={articles}></ArticlesList>,document.querySelector("#root"))





























// const device = {
//     deviceType : "phone",
//     features : [
//         {
//             id : 0,
//             feature : "subwoofer",
//         },
//         {
//             id : 1,
//             feature : "non-porous, washable",
//         },
//         {
//             id : 2,
//             feature : "Wings",
//         },
//         {
//             id : 3,
//             feature : "Beveles Bezel",
//         },
//         {
//             id : 4,
//             feature : "Beveled Bevel",
//         },
//         {
//             id : 5,
//             feature : "Seedless",
//         },
//     ]
// }

// function DeviceFeaturesList({device}) {
//     return (
//         <div className='device-features-list'>
//             <DeviceType type={device.deviceType}></DeviceType>
//             <div className="features-list">
//                 {
//                     device.features.map(featureItem => (
//                         <FeatureItem key={featureItem.id} >{featureItem.feature} </FeatureItem>
//                     ))
//                 }
//             </div>
//             <AddCardInput></AddCardInput>
//         </div>
//     )
// }
// DeviceFeaturesList.prototype = {
//     device : PropTypes.object.isRequired,
// }

// const FeatureItem = ({children}) => (
//     <div className="feature-item">{children} </div>
// )


// const DeviceType = ({type}) => (
//     <h3 className='device-type'>{type} Features </h3>

// )
// DeviceType.prototype = {
//     type : PropTypes.string.isRequired
// }

// const AddCardInput = () => (
//     <input className='add-card' type="text" id='add-feature' placeholder='add a card ...'/>

// )

// ReactDOM.render(<DeviceFeaturesList device={device}></DeviceFeaturesList>,document.querySelector("#root"));