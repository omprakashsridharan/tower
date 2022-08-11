(function() {var implementors = {
"tower":[["impl&lt;D, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/balance/p2c/struct.MakeBalanceLayer.html\" title=\"struct tower::balance::p2c::MakeBalanceLayer\">MakeBalanceLayer</a>&lt;D, Req&gt;"],["impl&lt;S, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/balance/p2c/struct.MakeBalance.html\" title=\"struct tower::balance::p2c::MakeBalance\">MakeBalance</a>&lt;S, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>"],["impl&lt;Request&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/buffer/struct.BufferLayer.html\" title=\"struct tower::buffer::BufferLayer\">BufferLayer</a>&lt;Request&gt;"],["impl&lt;Req, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/buffer/struct.Buffer.html\" title=\"struct tower::buffer::Buffer\">Buffer</a>&lt;Req, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>"],["impl&lt;U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/filter/struct.FilterLayer.html\" title=\"struct tower::filter::FilterLayer\">FilterLayer</a>&lt;U&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/filter/struct.Filter.html\" title=\"struct tower::filter::Filter\">Filter</a>&lt;T, U&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, U:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/filter/struct.AsyncFilter.html\" title=\"struct tower::filter::AsyncFilter\">AsyncFilter</a>&lt;T, U&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/limit/concurrency/struct.ConcurrencyLimitLayer.html\" title=\"struct tower::limit::concurrency::ConcurrencyLimitLayer\">ConcurrencyLimitLayer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/limit/concurrency/struct.GlobalConcurrencyLimitLayer.html\" title=\"struct tower::limit::concurrency::GlobalConcurrencyLimitLayer\">GlobalConcurrencyLimitLayer</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/limit/concurrency/struct.ConcurrencyLimit.html\" title=\"struct tower::limit::concurrency::ConcurrencyLimit\">ConcurrencyLimit</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/limit/rate/struct.RateLimitLayer.html\" title=\"struct tower::limit::rate::RateLimitLayer\">RateLimitLayer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/limit/rate/struct.Rate.html\" title=\"struct tower::limit::rate::Rate\">Rate</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/load/completion/struct.CompleteOnResponse.html\" title=\"struct tower::load::completion::CompleteOnResponse\">CompleteOnResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/load/peak_ewma/struct.Cost.html\" title=\"struct tower::load::peak_ewma::Cost\">Cost</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/load/pending_requests/struct.Count.html\" title=\"struct tower::load::pending_requests::Count\">Count</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/load_shed/struct.LoadShedLayer.html\" title=\"struct tower::load_shed::LoadShedLayer\">LoadShedLayer</a>"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/load_shed/struct.LoadShed.html\" title=\"struct tower::load_shed::LoadShed\">LoadShed</a>&lt;S&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/make/struct.Shared.html\" title=\"struct tower::make::Shared\">Shared</a>&lt;S&gt;"],["impl&lt;M, Request&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/make/struct.IntoService.html\" title=\"struct tower::make::IntoService\">IntoService</a>&lt;M, Request&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>"],["impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/retry/struct.Retry.html\" title=\"struct tower::retry::Retry\">Retry</a>&lt;P, S&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/spawn_ready/struct.SpawnReadyLayer.html\" title=\"struct tower::spawn_ready::SpawnReadyLayer\">SpawnReadyLayer</a>"],["impl&lt;S, F, Req&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/steer/struct.Steer.html\" title=\"struct tower::steer::Steer\">Steer</a>&lt;S, F, Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/timeout/struct.TimeoutLayer.html\" title=\"struct tower::timeout::TimeoutLayer\">TimeoutLayer</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/timeout/struct.Timeout.html\" title=\"struct tower::timeout::Timeout\">Timeout</a>&lt;T&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.AndThen.html\" title=\"struct tower::util::AndThen\">AndThen</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.AndThenLayer.html\" title=\"struct tower::util::AndThenLayer\">AndThenLayer</a>&lt;F&gt;"],["impl&lt;In, T, U, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.BoxLayer.html\" title=\"struct tower::util::BoxLayer\">BoxLayer</a>&lt;In, T, U, E&gt;"],["impl&lt;T, U, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.BoxCloneService.html\" title=\"struct tower::util::BoxCloneService\">BoxCloneService</a>&lt;T, U, E&gt;"],["impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"tower/util/enum.Either.html\" title=\"enum tower::util::Either\">Either</a>&lt;A, B&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.FutureService.html\" title=\"struct tower::util::FutureService\">FutureService</a>&lt;F, S&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapErr.html\" title=\"struct tower::util::MapErr\">MapErr</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapErrLayer.html\" title=\"struct tower::util::MapErrLayer\">MapErrLayer</a>&lt;F&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapRequest.html\" title=\"struct tower::util::MapRequest\">MapRequest</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapRequestLayer.html\" title=\"struct tower::util::MapRequestLayer\">MapRequestLayer</a>&lt;F&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapResponse.html\" title=\"struct tower::util::MapResponse\">MapResponse</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapResponseLayer.html\" title=\"struct tower::util::MapResponseLayer\">MapResponseLayer</a>&lt;F&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapResult.html\" title=\"struct tower::util::MapResult\">MapResult</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapResultLayer.html\" title=\"struct tower::util::MapResultLayer\">MapResultLayer</a>&lt;F&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapFuture.html\" title=\"struct tower::util::MapFuture\">MapFuture</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.MapFutureLayer.html\" title=\"struct tower::util::MapFutureLayer\">MapFutureLayer</a>&lt;F&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.ServiceFn.html\" title=\"struct tower::util::ServiceFn\">ServiceFn</a>&lt;T&gt;"],["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.Then.html\" title=\"struct tower::util::Then\">Then</a>&lt;S, F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/util/struct.ThenLayer.html\" title=\"struct tower::util::ThenLayer\">ThenLayer</a>&lt;F&gt;"],["impl&lt;L:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower/struct.ServiceBuilder.html\" title=\"struct tower::ServiceBuilder\">ServiceBuilder</a>&lt;L&gt;"]],
"tower_layer":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_layer/struct.Identity.html\" title=\"struct tower_layer::Identity\">Identity</a>"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_layer/struct.LayerFn.html\" title=\"struct tower_layer::LayerFn\">LayerFn</a>&lt;F&gt;"],["impl&lt;Inner:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Outer:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_layer/struct.Stack.html\" title=\"struct tower_layer::Stack\">Stack</a>&lt;Inner, Outer&gt;"]],
"tower_test":[["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_test/mock/spawn/struct.Spawn.html\" title=\"struct tower_test::mock::spawn::Spawn\">Spawn</a>&lt;T&gt;"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"tower_test/mock/struct.Mock.html\" title=\"struct tower_test::mock::Mock\">Mock</a>&lt;T, U&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()